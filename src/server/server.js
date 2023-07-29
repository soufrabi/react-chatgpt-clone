

import express from 'express'
import cors from 'cors'

const PORT = 8000
const app = express()

app.use(express.json)
app.use(cors())


const OPENAI_API_KEY = 'sk-bla'


app.post('/completion', async (req,res) => {
  try {
    
    const options = {
      method : "POST",
      headers: {
        "Authorization" : "Bearer ${OPENAI_API_KEY}",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        "model" : "gpt-3.5-turbo",
        "messages" : [{"role":"user", "content":"Hi is this ChatGPT? "}]

      }
      )

    }

    console.log(options)
    const response = await fetch('https://api.openai.com/v1/chat/completions',options)
    const data = await response.json()
    

    console.log(data)

    res.send(data)

  } catch (error) {
    console.error(error)
  }


})

app.listen(PORT, () => {

  console.log('Your server is running on PORT '+PORT)} )
