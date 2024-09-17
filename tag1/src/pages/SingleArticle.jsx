import { useParams } from 'react-router-dom'
import { blogData } from '../utils/data/blogData'

function SingleArticle() {
    const id = useParams().id;
    return (<>
        <h1>{blogData[id].title}</h1>
        <div>{blogData[id].body}</div>
    </>
    )
}

export default SingleArticle