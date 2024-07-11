import '@aws-amplify/ui-react/styles.css'
import '@fontsource/inter'
import {HomePage} from "./components";
//import './App.css'

function App() {

  return (
    <>
        <HomePage />
       {/* <Flex
            width={"30%"}
        >
        <Card variation={"elevated"}>
        <POICard overrides={{
            image:{
                src:"src/assets/mountain.png",
            },
            POICard:{
                onClick:()=>alert("clicked⛰️"),
                style:{
                    cursor:"pointer"
                }
            },
            title:{
                children:"Pico de las Nieves"
            },
            aboveTitle:{
                children:"Mountains in Gran Canaria"
            },
            contentText:{
                children:"This is the top of the mountain in the middle of the Gran Canaria island. It has 1956 m" +
                    " and offers the best view of the island. 🔭"
            },
            Badge:{
                variation:"info"
            }
        }}/>
        </Card>
        </Flex>*/}
    </>
  )
}

export default App
