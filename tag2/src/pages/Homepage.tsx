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
    <Button2 backgroundColor="red" color="white" borderColor="green"/>
  </>
}

export default Homepage