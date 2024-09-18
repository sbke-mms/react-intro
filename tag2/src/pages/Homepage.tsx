import Button from "../components/button/Button"
import Button2 from "../components/button2/Button2"

function Homepage() {
  return <>
    <h2>Hompage heading</h2>
    <div>
    Lorem ipsum dolor sit amet,
    </div>
    <Button><div>blabla</div><div>blabla</div></Button>
    <hr/>
    <Button2 style = {{backgroundColor:"red", 
      color:"white",
       borderColor:"green",
        padding:"10px",
        borderRadius:"10px",
        boxShadow:"3px 3px black"}}
        title="Download"/>
  </>
}

export default Homepage