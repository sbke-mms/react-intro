import { NavLink } from "react-router-dom"

function NavItem({href, title}:{href:string, title:string}) {
  return (
    <li >
               <NavLink to={href}>{title}</NavLink>
            </li>
  )
}

export default NavItem