import { useParams } from 'react-router-dom'
import { blogData } from '../utils/data/blogData'
import styles from '../styles/blog.module.css'

function SingleArticle() {
    const id = useParams().id;
    const article =  blogData.find((item) => item.id === id);
    return (<>
        <h1 className={styles.articleHeader}>{article.title}</h1>
        <div className={styles.articleBody}>{article.body}</div>
    </>
    )
}

export default SingleArticle