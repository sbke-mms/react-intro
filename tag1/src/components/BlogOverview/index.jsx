
import { blogData } from "../../utils/data/blogData"
import BlogItem from "./BlogItem.jsx"

function BlogOverview({styles}){
    const blogItems = blogData.map((item) => {
        return <BlogItem {...item}  key={item.id}/>
    })
    return (<>
        <h1 className={`${styles.blogHeader} ${styles.underline}`}>Blog page</h1>
        <div>
            {blogItems}
        </div>
    </>
    )
}

export default BlogOverview