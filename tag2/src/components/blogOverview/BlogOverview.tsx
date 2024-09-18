import { useEffect, useState } from 'react'
import PostItem from './PostItem'

type BlogArticle = {
    userId: number,
    id: number,
    title: string,
    body: string
}
function BlogOverview() {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] =useState(false)

    useEffect( () => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => 
            setTimeout(()=> {
                setPosts(data)
                setIsLoading(false)
            },1500
            )
        ).catch((err) => {
            console.log("error", err)
            setError(true)
        }).finally(()=>setIsLoading(false))
    }, [])

    const PostList = posts.map((post:BlogArticle) => {
        return <PostItem key={post.id} title={post.title}/>
    })

    return (
        <div>
            {isLoading
                ? <div>is Loading ...</div> 
                : PostList
            }
            {error && <div>error</div>}
        </div>
        
    )
}

export default BlogOverview



    //useEffect exercise
    /*
    
    
        const [post, setPosts] = useState(0)
    
    useEffect( () => {
        console.log("effect runs")
        setInterval( () => 
            setPosts(prev => prev+1)
        , 1000) // triggers infinitely
    }

    ),[post] 
    useEffect( () => {
        console.log("effect runs")
        const interval = setInterval( () => 
            setPosts(prev => prev+1)
        , 1000)

        return () => {
            console.log("clear runs")
            clearInterval(interval)
        }
    }, [post]) 

    return (
        <div>BlogOverview
            <button>{post}</button>
            <button onClick={()=>setPosts(prev => prev+1)}>inc</button>
        </div>
        
    )
    
    */