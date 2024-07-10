import '@aws-amplify/ui-react/styles.css'
import '@fontsource/inter'
import './App.css'
import {View} from "@aws-amplify/ui-react";

function App() {

  return (
    <>
        <View
            as="div"
            ariaLabel="View example"
            backgroundColor="var(--amplify-colors-white)"
            borderRadius="6px"
            border="1px solid var(--amplify-colors-black)"
            boxShadow="3px 3px 5px 6px var(--amplify-colors-neutral-60)"
            color="var(--amplify-colors-blue-60)"
            height="4rem"
            maxWidth="100%"
            padding="1rem"
            width="20rem"
            onClick={() => alert('🏔 What a beautiful <View>! 🔭')}
        >
            {"I'm a <div>! 🤩"}
        </View>
    </>
  )
}

export default App
