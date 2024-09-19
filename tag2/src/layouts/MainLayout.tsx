import Footer from "../components/Footer"
import Header from "../components/header/Header"
import { Outlet } from "react-router-dom";
import { UserContext } from "../store/UserContext";


function MainLayout() {

  return (<>
    <UserContext.Provider value={false}>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </UserContext.Provider>
  </>
  )
}

export default MainLayout