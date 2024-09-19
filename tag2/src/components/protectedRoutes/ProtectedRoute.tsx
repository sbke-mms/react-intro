import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../store/UserContext"

function ProtectedRoute() {

    const user = useContext(UserContext)
    console.log("user", user)

    if(!user){
        return <>
            <Navigate to="/login" replace/>
        </>
    }

    return (
        <Outlet/>

    )
}

export default ProtectedRoute