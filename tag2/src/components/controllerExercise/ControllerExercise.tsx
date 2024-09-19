import { useEffect, useState } from 'react'

function ControllerExercise() {

  const [user, setUser] = useState(0)
  const [selectedUser, setSelectedUser] = useState({name:"", email:""})

  useEffect(()=>{
    const controller = new AbortController()
    const signal = controller.signal
    if(user !== 0) {
      fetch(`https://jsonplaceholder.typicode.com/users/${user}`, 
        {signal: signal})
        .then(res => res.json())
        .then(data => setSelectedUser(data))
        return () => {
          controller.abort()
        }
    }
  }, [user]) //call on user change

  return (
    <div><h2>ControllerExercise</h2>
      <div onClick={()=>setUser(1)}>User 1</div>
      <div onClick={()=>setUser(2)}>User 2</div>
      <div onClick={()=>setUser(3)}>User 3</div>
      {selectedUser.name!=="" && <>
      <hr/>
        <div>{selectedUser.name}</div>
        <div>{selectedUser.email}</div>
      </>}
    </div>
  )
}

export default ControllerExercise