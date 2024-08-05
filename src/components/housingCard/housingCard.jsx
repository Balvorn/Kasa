import { Link } from 'react-router-dom'
import './housingCard.scss'

export default function HousingCard({ id, title, cover }) {
    return (
        <li>
            <Link to={'annonce/' + id}>
                <article>
                    <img src={cover} alt={title} />
                    <h2>{title}</h2>
                </article>
            </Link >
        </li>
    )
}