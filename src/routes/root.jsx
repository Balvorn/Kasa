import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Root() {
    return (
        <>
            <Header />
            <main id="content">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
