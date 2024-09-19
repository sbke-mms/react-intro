import Footer from "../components/Footer"
import Header from "../components/header/Header"
import { Outlet } from "react-router-dom";
import { UserContext } from "../store/UserContext";
import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


function MainLayout() {

  const {value} = useLocalStorage("mms-user")
  const [user, setUser] = useState(value?value:{email:"", password:"", state:false})

  return (<>
    <UserContext.Provider value={{user, setUser}}>
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