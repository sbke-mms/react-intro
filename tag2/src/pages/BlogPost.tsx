import React,{useEffect, useState} from 'react'

function BlogPost() {
    const INIT_VALUES={title: "", body:""}

    const [article, setArticle] = useState(INIT_VALUES)
    const [createdArticle, setCreatedArticle] = useState({title: "", body:"", userId:"", id:""})

    function handleChange(event:{target:{name:string, value:string}}) {
        setArticle({...article, [event.target.name]:event.target.value})
    }

    function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: article.title,
              body: article.body,
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setCreatedArticle(json)
            });
        event.preventDefault()
        console.log("submitted", article)
        setArticle(INIT_VALUES)
    }

    const [user, setUser] = useState({name:"", email:""})

    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/users/${createdArticle.userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [createdArticle.userId]) //call on user change

  return (
  <>
    <div>BlogPost</div>
    <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Titel </label>
        <input 
        id='title' 
        type='text' 
        name="title" 
        placeholder='Beispieltitel'
        value={article.title}
        onChange={handleChange} />
        <br/>

    
        <label htmlFor='body'>Inhalt </label>
        <textarea id='body' name="body" cols={50} rows={4}
            value={article.body} 
            placeholder='lorem ipsum'
        onChange={handleChange}/><br/>

        <button type='submit'>create article</button>
    </form>
    {createdArticle.title !== "" &&
        <>
            <hr/>
            Author : {user.name}
            <h3>{createdArticle.title}</h3>
            <p>{createdArticle.body}</p>
        </>
    }

  </>
  )
}

export default BlogPost