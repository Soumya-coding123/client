import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [response, setResponse] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  const apiUrl = import.meta.env.VITE_API_URL


  const fetchdata = async () => {
    const res = await axios.get(`${apiUrl}/soumi`)
    setResponse(res.data)
  };

  const submitdata = async () => {
    const res = await axios.post(`${apiUrl}/soumi`, { name ,age })
    setName("")
    setAge("")
  };
  return (
    <>
      <button onClick={fetchdata}>Fetch</button>
      {response.map((Data) => (
        <h1>{Data.name}</h1>
      ))}

      <label>Details</label>
      <input type="text" onChange={(e)=>{setName(e.target.value)}}  placeholder="Enter your name" />
      <input type="number" onChange={(e)=>{setAge(e.target.value)}} placeholder="Enter your age" />
      <button onClick={submitdata}>Submit</button>
    </>
  )

}

export default App
