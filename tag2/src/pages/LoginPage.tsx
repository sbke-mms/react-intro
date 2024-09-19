import React, { useContext, useState } from "react"
import { UserContext } from "../store/UserContext"

function LoginPage() {

    const userContext = useContext(UserContext)

    const INIT_VALUES={email: "", password:""}

    const [user, setUser] = useState(INIT_VALUES)

    function handleChange(event:{target:{name:string, value:string}}) {
        setUser({...user, [event.target.name]:event.target.value})
    }

    function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log("submitted", user)

        //contectUpdate
        userContext?.setUser({...user, state:true})
        setUser(INIT_VALUES)
    }

    //console.log("user", user)

    return (
    <div><h3>LoginPage</h3>

    <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email </label>
        <input 
            id='email' 
            type='text' 
            name="email" 
            placeholder='bla@example.com'
            value={user.email}
            onChange={handleChange} />
            <br/>

        
        <label htmlFor='password'>Passwort </label>
        <input id='password' type='text' name="password" 
            value={user.password} 
            placeholder='admin123'
        onChange={handleChange}/><br/>
    
        <button type='submit'>login</button>
    </form>


    </div>
  )
}

export default LoginPage