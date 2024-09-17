import { NavLink } from 'react-router-dom'

function BlogItem({title, body,index}) {
    console.log(index)
    return <>
    <NavLink to={`${index}`}><h1>{title}</h1></NavLink>
    <div>{body}</div>
    </>
}

export default BlogItem