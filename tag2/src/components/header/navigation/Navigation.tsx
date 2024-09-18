import { navData } from '../../../utils/data/navData'
import NavItem from './NavItem'

function Navigation() {
    const NavLinks = navData.map( (item:{href:string, title:string, id:string}) => {
        return <NavItem {...item} key ={item.id}/>
    })

  return <nav>
        <ul>
            {NavLinks}
        </ul>
    </nav>
}

export default Navigation