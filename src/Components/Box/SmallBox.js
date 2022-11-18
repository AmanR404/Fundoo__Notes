import React from 'react'
import './SmallBox.css'
import { useState } from 'react';
import ThirdBox from './ThirdBox';

function SmallBox() {
  const [myVar, setmyVar] = useState(false);
  const [title, settitle] = useState("")
  const [note, setnote]    = useState("")

  const[saver, setSaver]  = useState(false)

  const noteSaver = ()=>{
    setSaver(true)
  }
  const takenoteCloser = ()=>{
    setmyVar(false)
  }

  function clickBody() {
    if(title==="" && note===""){
      console.log("")
    }
    else{
      setTimeout(() => {
        setSaver(true)
        setmyVar(false)
      }, 4000);
    }
}
  document.body.addEventListener("click", clickBody)

  if(myVar){
      return(
      <div>
        <div className='secondbox'>
           <div className='secondinnerbox'>
            <div className='titlebox'>
                <input type="text" id="titleboxtitle" value={title} placeholder="Title" onChange={(event)=>{
                  settitle(event.target.value)
                }}/>
                <span className="material-symbols-outlined hover pushpin">
                  push_pin
                </span>
              </div>
              <input type="text" value={note} id="titleboxnote" placeholder="Take a note..." onChange={event =>{
                setnote(event.target.value)
              }} />
              <div className='iconsbox'>
                <div>
                  <span className="material-symbols-outlined sideicons2 check2 hover">
                  add_alert
                  </span>
                  <span className="material-symbols-outlined sideicons2 check2 hover">
                  person_add
                  </span>
                  <span className="material-symbols-outlined sideicons2 check2 hover">
                  palette
                  </span>
                  <span className="material-symbols-outlined disabledicons2 check2">
                  image
                  </span>
                  <span className="material-symbols-outlined sideicons2 check2 hover">
                  system_update_alt
                  </span>
                  <span className="material-symbols-outlined sideicons2 check2 hover">
                  more_vert
                  </span>
                  <span className="material-symbols-outlined disabledicons2">
                  undo
                  </span>
                  <span className="material-symbols-outlined disabledicons2">
                  redo
                  </span>
                </div>
                <span className='hover close' onClick={() => { takenoteCloser(); noteSaver();}}>Close</span>
              </div>
           </div>
           </div>
           {saver? <ThirdBox title={title} note={note}/> : null}
      </div>)
  }
  else{
    return (
      <div>
        <div className='takenotebox'>
          <span onClick={()=>{
            setmyVar(true)
          }} className='note'>Take a note...</span>
          <div id="takenoteinnerbox">
              <span className="material-symbols-outlined check hover">
                  check_box
              </span>
              <span className="material-symbols-outlined disabledcheck">
                  brush
              </span>
              <span className="material-symbols-outlined check hover">
                  image
              </span>
          </div>
      </div>
      {saver? <ThirdBox title={title} note={note}/> : null}
      </div>
    )
  }
}

export default SmallBox