import { NavLink } from 'react-router-dom'

function BlogItem({title, body, id}) {
    return <>
    <NavLink to={`${id}`}><h1>{title}</h1></NavLink>
    <div>{body}</div>
    </>
}

export default BlogItem