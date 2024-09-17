import { NavLink } from 'react-router-dom'

function BlogItem({title, id, styles}) {
    return <>
    <NavLink to={`${id}`} className={`${styles.blogLink}`}>{title}</NavLink>
    <hr className={styles.itemDivider}/>
    </>
}

export default BlogItem