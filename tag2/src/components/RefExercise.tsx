import { useRef } from "react"

function RefExercise() {

    //mit useRef wird kein re-rendering beim input keystroke ausgelöst
    // es wird NUR die Referenz abgefragt beim handleSubmit()
    //references definition
    const firstNameRef = useRef<HTMLInputElement>(null)
    console.log("firstname", firstNameRef)
    const lastNameRef = useRef<HTMLInputElement>(null)

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log("firstNameRef",firstNameRef?.current?.value)
    }

  return (
    <>
    <h2>Ref Exercise</h2>
    <form onSubmit={handleSubmit}> 
        <input name="firstname" type="text" placeholder="firstname" ref={firstNameRef}/><br/>
        <input name="lastname" type="text" placeholder="lastname" ref={lastNameRef}/><br/>
        <button type="submit">Submit</button>

    </form>
    </>
  )
}

export default RefExercise