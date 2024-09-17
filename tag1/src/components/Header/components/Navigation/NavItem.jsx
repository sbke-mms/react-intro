import { useState } from 'react'

function NavItem({title, href}) {
    const [change, setChange] = useState(false)
    function changeColor() {
        setChange(!change) // only active after rendering
        //console.log("in function:", change)
    }

    //console.log("outer function:", change)
    return <li onClick={changeColor} style={{color:change?"green":"red"}} >
            {title}
    </li>
}

export default NavItem