import React from 'react'
import ReactDOM from 'react-dom/client'
import '@aws-amplify/ui-react/styles.css'
import '@fontsource/inter'
import '@aws-amplify/ui-react-geo/styles.css';
import App from './App.tsx'
import './index.css'
import {ThemeProvider} from '@aws-amplify/ui-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
)
