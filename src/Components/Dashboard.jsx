import React from 'react'
import { getNoteList } from '../Pages/Services/DataServices'
import { useState } from 'react'
import ThirdBox from './Box/ThirdBox'

function Dashboard() {

    const [notes, setNotes] = useState([])
    console.log(notes)
    const GetNotes= () => {  
        getNoteList().then((resp)=>{
            // console.log(resp.data.data.data , "Api called")
            setNotes(resp.data.data.data)
        })  
        .catch((error)=>{console.log(error)})     
      }
      React.useEffect(() => {GetNotes()}, []) 

  return (
    <div>
       { notes.map(notes => (
            <ThirdBox notes={notes} key={notes.title}/>
        ))}
    </div>
  )
}

export default Dashboard