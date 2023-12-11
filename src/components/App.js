
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text, setText] = useState("")


  return (
    <div>
      <h3>Enter your name:</h3>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
        {
          text && <h1>Hello {text}!</h1>
        }
    </div>
  )
}

export default App
