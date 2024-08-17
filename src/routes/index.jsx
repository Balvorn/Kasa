import getHousings from "../api/housings";
import Banner from "../components/banner/banner";
import HousingCard from "../components/housingCard/housingCard";
import './css/index.scss'
import background from '../assets/background1.png'
import {useLoaderData} from "react-router-dom"

export async function loader() {
    const housings = await getHousings();
    return { housings };
}


export default function Index() {
    const { housings } = useLoaderData();
    const listHousings = housings.map((housing) => {
        return <HousingCard key={housing.id} id={housing.id} cover={housing.cover} title={housing.title}></HousingCard>
    })
    return (
        <>
            <Banner text="Chez vous, partout et ailleurs" img={background} />
            {
                housings.length ? (
                    <ul className="housings-list">{listHousings}</ul>
                ) : (
                    <p>
                        <i>Pas de logements</i>
                    </p>
                )
            }

        </>
    )
}