import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => { 
    fetch("http://147.93.111.81:4000/api/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
    .catch()
  }, []);

  return (
    <>
      <h1>Welcome! Pratik to Hostinger</h1>
      <h2> data {message} </h2>
    </>
  )
}

export default App
