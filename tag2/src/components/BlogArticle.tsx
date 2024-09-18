import {useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function BlogArticle() {
    const [article, setArticle] = useState({title:"", body:""})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] =useState(false)
    const id = useParams().id

    useEffect( () => {
        setIsLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => {
                setArticle(data)
                setIsLoading(false)
            }
        ).catch((err) => {
            console.log("error", err)
            setError(true)
        }).finally(()=>setIsLoading(false))
    }, [])
  return (<>
    {isLoading ? 
      <div>is loading</div>
    : <><h3>{article["title"]}</h3>
      <p>{article["body"]}</p></>
    }
    {error && <div>error</div>}
  </>
  )
}

export default BlogArticle