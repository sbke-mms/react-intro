import { useParams } from 'react-router-dom'
import { blogData } from '../utils/data/blogData'

function SingleArticle() {
    const id = useParams().id;
    const article =  blogData.find((item) => item.id === id);
    return (<>
        <h1>{article.title}</h1>
        <div>{article.body}</div>
    </>
    )
}

export default SingleArticle