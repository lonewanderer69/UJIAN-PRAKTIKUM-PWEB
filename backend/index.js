import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Satepadang70",
    database:"ujian_50421078"
})

app.use(express.json())

app.get("/", (req,res)=>{
    res.json("you've reached backend")
})

app.get("/firearms", (req,res)=>{
    const q = "SELECT * FROM firearms"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/firearms", (req,res)=>{
    const q = "INSERT INTO firearms (`type`,`desc`, `price`,`image`) VALUES (?)"
    const values = [
        req.body.type,
        req.body.desc,
        req.body.price,
        req.body.image,
    ]

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Firearms has been added successfully.")
    })
})

app.delete("/firearms/:id", (req,res)=>{
    const firearmId = req.params.id
    const q = "DELETE FROM firearms WHERE id = ?"

    db.query(q, [firearmId], (err, data) => {
        if(err) return res.json(err)
        return res.json("Firearm has been deleted successfully.")
    })
})

app.put("/firearms/:id", (req,res)=>{
    const firearmId = req.params.id
    const q = "UPDATE firearms SET `type` = ?, `desc` = ?, `price` = ?, `image` = ? WHERE id = ?"

    const values=[
        req.body.type,
        req.body.desc,
        req.body.price,
        req.body.image, 
    ]

    db.query(q, [...values,firearmId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Firearm has been updated successfully.")
    })
})

app.listen(8800, ()=>{
    console.log("Backend connected")
})