import {HomePage} from "./components";
import {Amplify} from "aws-amplify";
import output from '../amplify_outputs.json'

Amplify.configure(output)

//import './App.css'

function App() {
    return (
                <HomePage />
    )
}

export default App
