import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
  const [firearm,setFirearm] = useState({
    type: "",
    desc: "",
    price: null,
    image: "",
  })

const navigate = useNavigate()
const location = useLocation()

const firearmId = location.pathname.split("/")[2]

  const handleChange = (e) =>{
    setFirearm((prev)=>({...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.put("http://localhost:8800/firearms/"+ firearmId, firearm)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  console.log(firearm)
  return (
    <div className='form'>
      <h1>Update Firearm</h1>
      <input type="text" placeholder="type" onChange={handleChange} name="type"/>
      <input type="text" placeholder="desc" onChange={handleChange} name="desc"/>
      <input type="number" placeholder="price" onChange={handleChange} name="price"/>
      <input type="text" placeholder="image" onChange={handleChange} name="image"/>
      <button className="formButton" onClick={handleClick}>Update</button>
      </div>
  )
}

export default Update