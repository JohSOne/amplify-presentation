import {Amplify} from "aws-amplify";
import './App.css'
import React from "react";
import HomePage from "./pages/HomePage.tsx";

import output from '../amplify_outputs.json'
import {Authenticator} from "@aws-amplify/ui-react";
Amplify.configure(output)

function App() {

    return (
        <Authenticator>
            {({signOut})=> <HomePage signOut={signOut}/>}
        </Authenticator>
    )
}

export default App;
