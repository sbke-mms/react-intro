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
    const [error, setError] =useState({state:true, msg:""})

    async function fetchData() {
        setIsLoading(true)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setPosts(data)
        }catch (err) {
            setError({...error,state:true, msg:"error"})
            console.log("err ",err)
        }finally {
            setIsLoading(false)
        }
    }

    useEffect( () => {
        fetchData()
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