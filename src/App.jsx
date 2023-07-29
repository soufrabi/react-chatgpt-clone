import { useState } from "react"
import "./App.css"

const App = () => {

  const [message,setMessage] = useState(null)
  const [value,setValue] = useState(null)

  const getMessages = async () => {

    console.log("Request sent")

    const options = {
      "method" : "POST",
      "body" :JSON.stringify({
        "message" : "Hello, how are you?"
      }),
      "headers":{
        "Content-Type":"applications/json"


      }

    }

    try {

      const response = await fetch('http://localhost:8000/completions', options)

      const data = await response.json()
      console.log(data)
        
    } catch (error) {
      console.error(error)
      
    }

  }

  // console.log(value)

  return (
    <div className="app">
      <section className="side-bar">
        <button>+NewChat</button>
        <ul className="history">
            <li>Helllo</li>
        </ul>
        <nav>
          <p>Made by Andy</p>
        </nav>
      </section>

      <section className="main">
        <h1>AndyGPT</h1>

        <ul className="feed">


        </ul>

        <div className="bottom-container">
          <div className="input-container">
            <input type="text" onChange={ (e)=>{setValue(e.target.value)} }/ >
            <div id="submit" onClick={getMessages}>➢</div>

          </div>
          <p className="info">
            ChatGPT Mar 23 Version. Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts

          </p>

        </div>
      </section>
    </div>
  )
}

export default App
