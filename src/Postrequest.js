import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Postrequest() {
    const[name, setname] = useState("")
    const[email, setemail] = useState("")
    const{number, setnumber} = useState("")

    const submitHandler = e =>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',name)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
  return (
    <div>
        <h6>Contact Form</h6>
        <form onSubmit={submitHandler}>
            <label>Name</label>
            <input type="text" value={name} onChange={e=>{
                setname(e.target.value)
            }} />

            <label>Email</label>
            <input type="email" value={email} id="" onChange={e=>{
                setemail(e.target.value)
            }}/>

            <label>Number</label>
            <input type="number" value={number} id="" onChange={e=>{
                setnumber(e.target.value)
            }}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Postrequest