import { useState } from "react"
import "./App.css"

import { getResponse } from "./api_controller"

const App = () => {

  const [message, setMessage] = useState(null)
  const [value, setValue] = useState(null)
  const [previousChats,setPreviousChats] = useState([])
  const [currentTitle,setCurrentTitle] = useState([])

  const getMessages = async () => {


    const prompt = value
    const answer = await getResponse(prompt)

    // console.log("Response got"+answer)
    console.log(answer)
    if (typeof answer == "string") {
      // console.log("Answer is string")
      setMessage(answer)
    } else {
      setMessage('Failure')
    }

  }


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
            <input type="text" onChange={(e) => { setValue(e.target.value) }} />
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
