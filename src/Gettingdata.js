import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function Gettingdata() {
    const[data, setdata] = useState("")
    const[errormsg,seterrormsg] = useState("")

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            setdata(response.data)
        })
        .catch(error =>{
            console.log(error)
            seterrormsg("Error retrieving data")
        })
    },[])
  return (
    <div><h1>Fetched Data</h1>
        {data.length? data.map(element =>
                    <div key={element.id}>{element.title}</div>
         ): null}   
         {errormsg ? <div>{errormsg}</div>: null}    
    </div>
  )
}

export default Gettingdata