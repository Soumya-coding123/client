import './App.css'
import { useState } from 'react'
import axios from 'axios'
import { config} from 'dotenv'
config()
function App() {
  const [response, setResponse] = useState('')
  
  const fetchdata = async () => {
     const response = await axios.get(`${process.env.REACT_APP_API_URL}/soumi`)
    setResponse(response.data)
  }
  return (
    <>
      <button onClick={fetchdata} >hello</button>
      <h1>{response}</h1>
    </>
  )

}

export default App
