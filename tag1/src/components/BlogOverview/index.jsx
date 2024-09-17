
import { blogData } from "../../utils/data/blogData"
import BlogItem from "./BlogItem.jsx"

function BlogOverview(){
    const blogItems = blogData.map((item) => {
        return <BlogItem {...item}  key={item.id}/>
    })
    return (<>
        <div>BlogOverview</div>
        <div>
            {blogItems}
        </div>
    </>
    )
}

export default BlogOverview