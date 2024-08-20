import kasaLogo from '../../assets/logo.svg'
import { NavLink } from "react-router-dom";
import './header.scss'

export default function Header() {
    let vw = Math.max(document.documentElement.clientWidth || 0)
    return (
        <>
            <header>
                <img src={kasaLogo} className="logo" alt="Kasa logo" />
                <nav>
                    <ul id="links">
                        <li>
                            <NavLink to={`/`}>{vw > 992 ? "Accueil" : "ACCUEIL"}</NavLink>
                        </li>
                        <li>
                            <NavLink to={`about`}>{vw > 992 ? "A propos" : "A PROPOS"}</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}