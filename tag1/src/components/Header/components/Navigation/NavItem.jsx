import React from 'react'

function NavItem({item}) {
  return <li>
        <a href={item.href}>
            {item.title}
        </a>
    </li>
}

export default NavItem