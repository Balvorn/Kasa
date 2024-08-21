import { useLoaderData } from "react-router-dom";
import { getHousing } from "../api/housings";
import Collapse from "../components/collapse/collapse";
import star from "../assets/star.svg"
import './css/annonce.scss'
import Carousel from "../components/carousel/carousel";

export async function loader({ params }) {
    const housing = await getHousing(params.annonceId);
    if (!housing) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return { housing };
}

export default function Annonce() {
    const { housing } = useLoaderData();

    return (
        <>
            <Carousel pictures={housing.pictures} />
            <div className="housing-info">
                <div className="info-block1">
                    <h1>{housing.title}</h1>
                    <p>{housing.location}</p>
                    {housing.tags.map(tag => <div key={tag}>{tag}</div>)}
                </div>
                <div className="info-block2">
                    <div className="host">
                        <div>{housing.host.name.split(' ').map(str => <span key={str}>{str}</span>)}</div>
                        <img src={housing.host.picture} alt={housing.host.name} />
                    </div>
                    <div className="rating">
                        {
                            Array.from({ length: 5 }, (_, i) => <img key={i} src={star} className={i < parseInt(housing.rating) ? "colored" : "star"}></img>)
                        }
                    </div>
                </div>
                <div className="collapses">
                    <div className="width-adjust">
                        <Collapse title="Description" text={[housing.description]}></Collapse>
                    </div>
                    <div className="width-adjust">
                        <Collapse title="Equipements" text={housing.equipments}></Collapse>
                    </div>

                </div>
            </div>

        </>
    )
}