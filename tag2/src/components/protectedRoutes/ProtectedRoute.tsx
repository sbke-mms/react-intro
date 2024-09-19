import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../store/UserContext"

function ProtectedRoute() {

    const userContext = useContext(UserContext)
    console.log("user", userContext)

    if(!userContext?.user.state){
        return <>
            <Navigate to="/login" replace/>
        </>
    }

    return (
        <Outlet/>

    )
}

export default ProtectedRoute