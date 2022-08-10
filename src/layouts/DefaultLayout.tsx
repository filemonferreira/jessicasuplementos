import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

export function DefaultLayout() {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}