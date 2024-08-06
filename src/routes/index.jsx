import logements from "../api/logements"
import Banner from "../components/banner/banner";
import HousingCard from "../components/housingCard/housingCard";
import './css/index.scss'
import background from '../assets/background1.png'



export default function Index() {
    const listHousings = logements.map((logement) => {
        return <HousingCard key={logement.id} id={logement.id} cover={logement.cover} title={logement.title}></HousingCard>
    })
    return (
        <>
            <Banner text="Chez vous, partout et ailleurs" img={background}/>
            <ul className="housings-list">{listHousings}</ul>
        </>
    )
}