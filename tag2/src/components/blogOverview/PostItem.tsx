import { NavLink } from 'react-router-dom'

function PostItem({title, id}:{title:string, id:string}) {
  return (
    <div style={{border:"3px solid lightgray", borderRadius:"8px", margin:"3px",}}>
        <NavLink to={`${id}`} >{title}</NavLink>
    </div>
  )
}

export default PostItem