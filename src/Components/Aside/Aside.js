import React from 'react'
import './Aside.css'
import { useState } from 'react'
import Header from '../Header/Header'
import { getNoteList } from '../../Pages/Services/DataServices'
import Archivenotes from '../ArchiveNotes/Archivenotes'
import TrashNotes from '../TrashNotes/TrashNotes'

function Aside() {
  const[archivedNotes, setarchivedNotes] = useState([])

  // Getting Notes
  const GetNotes= () => {  
    getNoteList().then((resp)=>{
        setarchivedNotes(resp.data.data.data)
    })  
    .catch((error)=>{console.log(error)})     
  }
  React.useEffect(() => {GetNotes()}, []) 

  const noteSender = ()=>{
    if(archivedNotes.isArchived = true){
      setSender(true)
    }
  }
  const trashnoteSender = ()=>{
    if(archivedNotes.isDeleted = true){
      settrashSender(true)
    }
  }
  const noteCloser = ()=>{
    setSender(false)
  }
  const trashCloser = ()=>{
    settrashSender(false)
  }
const [sender, setSender] = useState(false)
const [trashsender, settrashSender] = useState(false)
const[menuOptions, setmenuOptions] = useState(false)
const [text, setText] = useState("Keep")

const toggleMenu = ()=> {
    if(menuOptions){
     setmenuOptions(false)
    }
    else{
     setmenuOptions(true)
    }
}
const notesChanger = ()=>{
  setText("Notes")
}
const reminderChanger = ()=>{
  setText("Reminders")
}
const archiveChanger = ()=>{
  setText("Archive")
}
const trashChanger = ()=>{
  setText("Trash")
}

  if(menuOptions){
      return(
        <div>
          <Header toggler={toggleMenu} text={text}/>
              <div className='asidebox'>
                <div className='iconsbox2'>
                    <span className="material-symbols-outlined ">
                            lightbulb
                    </span>
                    <span className="material-symbols-outlined">
                          notifications
                    </span>
                    <span className="material-symbols-outlined">
                          edit
                    </span>
                    <span className="material-symbols-outlined sideicons2 check2 hover">
                              system_update_alt
                    </span>
                    <span className="material-symbols-outlined">
                              delete
                    </span>
                </div>
                <div className='textbox'>
                  <span onClick={() => { notesChanger(); noteCloser(); trashCloser();}} className="hover">Notes</span>
                  <span onClick={reminderChanger} className="hover">Reminders</span>
                  <span className="hover">Edit labels</span>
                  <span onClick={() => { archiveChanger(); noteSender();}} className="hover">Archive</span>
                  <span onClick={() => { trashChanger(); trashnoteSender();}} className="hover">Trash</span>
                </div>
                {sender?archivedNotes.map(archivedNotes => (
                    <Archivenotes archivedNotes={archivedNotes} key={archivedNotes.title}  />
                )):null}
                {trashsender?archivedNotes.map(archivedNotes => (
                    <TrashNotes trashedNotes={archivedNotes} key={archivedNotes.title}  />
                )):null}
            </div>
        </div>
        )
  }
  else{
    return (
     <div>
       <Header toggler={toggleMenu}/>
          <div className='asidebox'>
            <div className='iconsbox2'>
                <span className="material-symbols-outlined">
                        lightbulb
                </span>
                <span className="material-symbols-outlined">
                      notifications
                </span>
                <span className="material-symbols-outlined">
                      edit
                </span>
                <span className="material-symbols-outlined sideicons2 check2 hover">
                          system_update_alt
                </span>
                <span className="material-symbols-outlined">
                          delete
                </span>
            </div>
        </div>
     </div>
    )
  }
}

export default Aside