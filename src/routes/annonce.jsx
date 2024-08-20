import { useLoaderData } from "react-router-dom";
import { getHousing } from "../api/housings";
import Collapse from "../components/collapse/collapse";
import star from "../assets/star.svg"
import arrow from "../assets/arrow.svg"
import './css/annonce.scss'
import { useState } from 'react';

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

    const Carousel = () => {
        const [index, setIndex] = useState(0);
        const length = housing.pictures.length;
        const handlePrevious = () => {
            const newIndex = index - 1;
            setIndex(newIndex < 0 ? length - 1 : newIndex);
        };

        const handleNext = () => {
            const newIndex = index + 1;
            setIndex(newIndex >= length ? 0 : newIndex);
        };

        return (
            <div className="carousel">
                <img src={housing.pictures[index]} alt="photo du logement" />
                {length > 1 && <>
                    <button className="control left" onClick={handlePrevious}><img src={arrow} alt="previous" /></button>
                    <button className="control right" onClick={handleNext}><img src={arrow} alt="previous" /></button>
                    <p className="index">{index+1}/{length}</p>
                </>
                }


            </div>
        );
    };
    return (
        <>
            {Carousel()}
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