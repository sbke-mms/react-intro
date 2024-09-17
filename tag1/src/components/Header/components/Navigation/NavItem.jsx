import React from 'react'

function NavItem({title, href}) {
  return <li>
        <a href={href}>
            {title}
        </a>
    </li>
}

export default NavItem