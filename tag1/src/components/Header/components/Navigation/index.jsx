import { navData } from "../../../../utils/data/navData"

export default function Navigation (){

const NavLinks = navData.map((item) => {
    return<li key={item.id}>
        <a href={item.href}>
            {item.title}
        </a>
    </li>
})

    return <nav>
        <ul>
            {NavLinks}
        </ul>
        <hr/>
    </nav>
}