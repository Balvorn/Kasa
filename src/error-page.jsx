import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <main id="content">
        <div id="error-page">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n’existe pas.</p>
          <Link to={`/`}>Retourner sur la page d’accueil</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
