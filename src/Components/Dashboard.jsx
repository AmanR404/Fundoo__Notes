import React from 'react'
import { getNoteList } from '../Pages/Services/DataServices'
import { useState } from 'react'
import ThirdBox from './Box/ThirdBox'

function Dashboard() {
    const [notes, setNotes] = useState([])
    const [sender, setSender] = useState(false)

    console.log(notes)
    const GetNotes= () => {  
        getNoteList().then((resp)=>{
            // console.log(resp.data.data.data , "Api called")
            setNotes(resp.data.data.data)
        })  
        .catch((error)=>{console.log(error)})     
      }
      React.useEffect(() => {GetNotes(); notesRenderer();}, []) 
  
      const notesRenderer = ()=>{
        if(notes.isArchived || notes.isDeleted){
          console.log("")
        }
        else{
              setSender(true)
        }
      }

  return (
    <div>
       {sender? notes.map(notes => (
            <ThirdBox notes={notes} key={notes.title}/>
        )):null}
    </div>
  )
}

export default Dashboard