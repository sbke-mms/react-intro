import Paragraph from "../components/Paragraph";
import MainLayout from "../layouts/MainLayout";
import "./Homepage.css"

function Homepage () {
    return <MainLayout>
            <h1>Homepage</h1>
            <Paragraph text="hello paragraph"/>
            <Paragraph text="hallo du da"/>
    </MainLayout>
}

export default Homepage