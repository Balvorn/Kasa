import kasaLogo from './assets/logo.svg'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <img src={kasaLogo} className="logo" alt="Kasa logo" />
                    <ul id="links">
                        <li>
                            <Link to={`/`}>Accueil</Link>
                        </li>
                        <li>
                            <Link to={`about`}>A propos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}