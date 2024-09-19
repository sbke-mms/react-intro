import { useState } from "react"
import Item3 from "./Item3"

function RenderingExercise({children}:{children: React.ReactNode}) {
    const [value, setValue] = useState(false)

    function handleChange() {
        setValue(!value)
    }

    console.log("wrapper rendering")

    return (
            <div style={{border:"1px solid black"}}>
            <h3>RenderExercice</h3>
                <button onClick={handleChange}>change value</button>
                {children}
                <Item3/>
            </div>
    )
}  

export default RenderingExercise