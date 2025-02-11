import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [response, setResponse] = useState([])
  
  const fetchdata = async () => {
    const apiUrl = import.meta.env.VITE_API_URL
    console.log(apiUrl);
    const res = await axios.get(`${apiUrl}/soumi`)
    console.log(res.data);
    setResponse(res.data)
  };

  const submitdata = async () => {
    const apiUrl = import.meta.env.VITE_API_URL
    const res = await axios.post(`${apiUrl}/soumi, { name ,age : Number(age)}`);

    console.log("user data", res.data);

    fetchdata();

    setName("");
    setAge("");
  };
  return (
    <>
      <button onClick={fetchdata}>hello</button>
      {response.map((user)=>(
        <h1>{user.age}</h1>
))}
   <label>Details</label>
   <input type="text" placeholder="Enter your name" />
   <input type="text" placeholder="Enter your age" />
   <button onClick={submitdata}>Submit</button>
    </>
  )

}

export default App
