import React from 'react'
import './SmallBox.css'
import { useState } from 'react';
import { addNote } from '../../Pages/Services/DataServices';

function SmallBox() {
  const [myVar, setmyVar] = useState(false);
  const [notesObj, setnotesObj] = useState({
    title : "",
    description : "",
    isArchived: false,
    color: ""
  })

  const title = notesObj.title;
  const note = notesObj.description;

  const takenoteCloser = ()=>{
    setmyVar(false)
  }

  const noteCreator = ()=>{
    addNote(notesObj)
    .then((resp) => {console.log(resp);})
    .catch((error) =>{console.log(error)})
  }

  function clickBody() {
    if(title==="" && note===""){
      console.log("Note cannot be Blank")
    }
    else{
      setTimeout(() => {
        setmyVar(false)
        noteCreator()
      }, 4000);
    }
}

let handleChangeTitle = (event) => {
  setnotesObj(prevState => ({
    ...prevState,
    title : event.target.value
}))
}

let handleChangeDescription = (event) => {
  setnotesObj(prevState => ({
    ...prevState,
    description : event.target.value
}))
}
  // document.body.addEventListener("click", clickBody)

  if(myVar){
      return(
      <div>
        <div className='secondbox'>
           <div className='secondinnerbox'>
            <div className='titlebox'>
                <input type="text" id="titleboxtitle" value={title} placeholder="Title" onChange={handleChangeTitle}/>
                <span className="material-symbols-outlined hover pushpin">
                  push_pin
                </span>
              </div>
              <input type="text" value={note} id="titleboxnote" placeholder="Take a note..." onChange={handleChangeDescription} />
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
                <span className='hover close' onClick={() => { takenoteCloser(); noteCreator()}}>Close</span>
              </div>
           </div>
           </div>
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
      </div>
    )
  }
}

export default SmallBox