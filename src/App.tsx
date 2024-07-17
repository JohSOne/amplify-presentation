import {Amplify} from "aws-amplify";
import './App.css'
import React from "react";
import HomePage from "./pages/HomePage.tsx";
import output from '../amplify_outputs.json';

Amplify.configure(output);

export default function App() {
    return (
            <HomePage />
    )
}