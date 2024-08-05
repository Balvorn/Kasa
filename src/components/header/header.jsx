import kasaLogo from '../../assets/logo.svg'
import { NavLink } from "react-router-dom";
import './header.scss'

export default function Header() {
    return (
        <>
            <header>
                <img src={kasaLogo} className="logo" alt="Kasa logo" />
                <nav>
                    <ul id="links">
                        <li>
                            <NavLink to={`/`}>Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to={`about`}>A propos</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}