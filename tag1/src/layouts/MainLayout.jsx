import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout () {
// outlet ist von react-router-dom, children von react

    return <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
}