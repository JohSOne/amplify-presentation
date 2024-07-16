import {Amplify} from "aws-amplify";
import './App.css'
import HomePage from "./pages/HomePage";

import output from '../amplify_outputs.json'
Amplify.configure(output)

function App() {
    return (
            <HomePage />
    )
}

export default App;
