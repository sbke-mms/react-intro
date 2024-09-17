
import { blogData } from "../../utils/data/blogData"
import BlogItem from "./BlogItem.jsx"

function BlogOverview(){
    const blogItems = blogData.map((item, index) => {
        return <BlogItem {...item} index={index} key={item.id}/>
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