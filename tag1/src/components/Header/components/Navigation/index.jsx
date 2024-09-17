import { navData } from "../../../../utils/data/navData"
import NavItem from "./NavItem"

export default function Navigation (){

const NavLinks = navData.map((item) => {
    return <NavItem {...item} key={item.id}/>
})

    return <nav>
        <ul>
            {NavLinks}
        </ul>
        <hr/>
    </nav>
}