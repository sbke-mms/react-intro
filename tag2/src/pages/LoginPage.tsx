import React, { useContext, useState } from "react"
import { UserContext } from "../store/UserContext"
import * as yup from 'yup'

function LoginPage() {

    const userContext = useContext(UserContext)

    const INIT_VALUES={email: "", password:""}

    const [user, setUser] = useState(INIT_VALUES)

    function handleChange(event:{target:{name:string, value:string}}) {
        setUser({...user, [event.target.name]:event.target.value})
    }

    //validation setup
    const [errMsg,setErrMsg] = useState({email:"", paassword:""})
    const LoginSchema = yup.object({
        email:yup.string().email().required(),
        password: yup.string().min(8,'too short')
    })

    //validation setup end

    async function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        try{
            await LoginSchema.validate(user, {abortEarly:false})
    
            //contectUpdate
            userContext?.setUser({...user, state:true})
            setUser(INIT_VALUES)
            

        }catch(err){
            userContext?.setUser({...user, state:false})
            console.log("err", err)
            if(err instanceof yup.ValidationError){
                const newErrors = err.inner.reduce ((acc, currentErr)=> {
                    acc[currentErr.path] = currentErr.message
                    return acc
                }, {})
                setErrMsg(newErrors)
            }
        }
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
            onChange={handleChange} 
            style={{borderColor: errMsg?.email? "red": ""}}/>
            {errMsg?.email && <p>{errMsg.email}</p>}
            <br/>

        
        <label htmlFor='password'>Passwort </label>
        <input id='password' type='text' name="password" 
            value={user.password} 
            placeholder='admin123'
        onChange={handleChange}
        style={{borderColor: errMsg?.password? "red": ""}}/>
            {errMsg?.password && <p>{errMsg.password}</p>}
            <br/>
    
        <button type='submit'>login</button>
    </form>


    </div>
  )
}

export default LoginPage