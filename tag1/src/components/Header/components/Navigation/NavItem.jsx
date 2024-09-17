import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function NavItem({title, href}) {
    const [change, setChange] = useState(false)
    function changeColor() {
        setChange(true) // only active after rendering
        //console.log("in function:", change)
    }

    //console.log("outer function:", change)
    return <li onClick={changeColor} style={{color:change?"green":"red"}} >
           <NavLink to={href}>{title}</NavLink> 
    </li>
}

export default NavItem