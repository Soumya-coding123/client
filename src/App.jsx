import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [response, setResponse] = useState('')
  
  const fetchdata = async () => {
    const apiUrl = import.meta.env.VITE_API_URL
    console.log(apiUrl);
    const res = await axios.get(`${apiUrl}/soumi`)
    setResponse(res.data)
  }
  return (
    <>
      <button onClick={fetchdata} >hello</button>
      <h1>{response}</h1>
    </>
  )

}

export default App
