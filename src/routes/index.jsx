import logements from "../api/logements"
import HousingCard from "../components/housingCard/housingCard";




export default function Index() {
    const listHousings = logements.map((logement) => {
        return <HousingCard key={logement.id} id={logement.id} cover={logement.cover} title={logement.title}></HousingCard>
    })
    return (
        <>
            <ul>{listHousings}</ul>
        </>
    )
}