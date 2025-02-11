import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [response, setResponse] = useState('')
  const fetchdata = async () => {
     const response = await axios.get('http://localhost:3000/soumi')
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
