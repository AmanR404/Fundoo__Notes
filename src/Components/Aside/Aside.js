import React from 'react'
import './Aside.css'
import { useState } from 'react'
import Header from '../Header/Header'

function Aside() {
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
                    <span class="material-symbols-outlined ">
                            lightbulb
                    </span>
                    <span class="material-symbols-outlined">
                          notifications
                    </span>
                    <span class="material-symbols-outlined">
                          edit
                    </span>
                    <span className="material-symbols-outlined sideicons2 check2 hover">
                              system_update_alt
                    </span>
                    <span class="material-symbols-outlined">
                              delete
                    </span>
                </div>
                <div className='textbox'>
                  <span onClick={notesChanger} className="hover">Notes</span>
                  <span onClick={reminderChanger} className="hover">Reminders</span>
                  <span className="hover">Edit labels</span>
                  <span onClick={archiveChanger} className="hover">Archive</span>
                  <span onClick={trashChanger} className="hover">Trash</span>
                </div>
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
                <span class="material-symbols-outlined">
                        lightbulb
                </span>
                <span class="material-symbols-outlined">
                      notifications
                </span>
                <span class="material-symbols-outlined">
                      edit
                </span>
                <span className="material-symbols-outlined sideicons2 check2 hover">
                          system_update_alt
                </span>
                <span class="material-symbols-outlined">
                          delete
                </span>
            </div>
        </div>
     </div>
    )
  }
}

export default Aside