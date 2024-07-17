import {Amplify} from "aws-amplify";
import './App.css'
import React from "react";

import output from '../amplify_outputs.json';
import HomePage from "./pages/HomePage.tsx";

Amplify.configure(output);

export default function App() {
    return (
        /*<Authenticator>
            {({signOut})=> <HomePage signOut={signOut}/>}
        </Authenticator>*/
            <HomePage />
    )
}