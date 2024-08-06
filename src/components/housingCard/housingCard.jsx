import { Link } from 'react-router-dom'
import './housingCard.scss'

export default function HousingCard({ id, title, cover }) {
    return (
        <li className='card'>
            <Link to={'annonce/' + id}>
                <article>
                    <img src={cover} alt={"cover image of " + title} />
                    <h2>{title}</h2>
                </article>
            </Link >
        </li>
    )
}