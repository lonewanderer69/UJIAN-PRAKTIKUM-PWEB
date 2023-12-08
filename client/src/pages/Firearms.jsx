import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Firearms = () => {
    const [firearms,setFirearms] = useState([])

    useEffect(()=>{
        const fetchAllFirearms = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/firearms")
                setFirearms(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllFirearms()
    }, [])

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/firearms/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

  return <div>
        <h1>Gambit Firearms Store</h1>
        <div className="firearms">
            {firearms.map(firearm=>(
                <div className="firearm" key={firearm.id}>
                    {firearm.image && <img src={firearm.image} alt="" />}
                    <h2>{firearm.type}</h2>
                    <p>{firearm.desc}</p>
                    <span>${firearm.price}</span>
                    <button className="delete" onClick={()=>handleDelete(firearm.id)}>Delete</button>
                    <button className="update"><Link to={`/update/${firearm.id}`}>Update</Link></button>
                </div>
            ))}
        </div>
        <div className="addbutton">
            <button>
                <Link to="/add">Add new Firearm</Link>
            </button>
        </div>
    </div>
  
}

export default Firearms