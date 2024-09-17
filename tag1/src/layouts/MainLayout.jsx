import Footer from "../components/Footer";
import Header from "../components/Header/Header";

export default function MainLayout (props) {
    return <>
        <Header/>
        <main>
            {props.children}
        </main>
        <Footer/>
    </>
}