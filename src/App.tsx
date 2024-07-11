import '@aws-amplify/ui-react/styles.css'
import '@fontsource/inter'
import {HomePage} from "./components";
import {Authenticator, Button} from "@aws-amplify/ui-react";
import {Amplify} from "aws-amplify";
import output from '../amplify_outputs.json'

Amplify.configure(output)

//import './App.css'

function App() {
    return (
        <>
            <HomePage/>
        </>
    )
}

export default App
