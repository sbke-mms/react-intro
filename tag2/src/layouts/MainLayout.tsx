import Footer from "../components/Footer"
import Header from "../components/header/Header"
import { Outlet } from "react-router-dom";


function MainLayout() {
  return (<>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
  </>
  )
}

export default MainLayout