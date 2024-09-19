import Button from "../components/button/Button"
import Button2 from "../components/button2/Button2"
import ControllerExercise from "../components/controllerExercise/ControllerExercise"
import Item1 from "../components/renderingExercice/Item1"
import Item2 from "../components/renderingExercice/Item2"
import RenderingExercise from "../components/renderingExercice/RenderingExercise"

function handleClick(name:string) {
  console.log("clicked", name)
  return name
}

function Homepage() {
  return <>
    <h2>Hompage heading</h2>
    <div>
    Lorem ipsum dolor sit amet,
    </div>
    <Button 
      action={handleClick} 
      padding={[40,30,10,10]}>
      <p>bla</p></Button>
    <hr/>
    <Button2 style = {{backgroundColor:"red", 
      color:"white",
       borderColor:"green",
        padding:"10px",
        borderRadius:"10px",
        boxShadow:"3px 3px black"}}
        title="Download"/>
    <ControllerExercise />
    <RenderingExercise>
      <Item1/>
      <Item2/>
    </RenderingExercise>
  </>
}

export default Homepage