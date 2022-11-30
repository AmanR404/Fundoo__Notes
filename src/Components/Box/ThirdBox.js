import React from 'react'
import './ThirdBox.css'
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { updateArchiveNote } from '../../Pages/Services/DataServices';
import { trashedNote } from '../../Pages/Services/DataServices';
import { updateNote } from '../../Pages/Services/DataServices';


function ThirdBox(props) {

  const[visible, setvisibility] = useState(true)
  const [opener, setOpener] = useState(false)
  const [inputValues, setInputValues] = useState({
    noteIdList: props.notes.id,
    title : props.notes.title,
    description : props.notes.description
  })

  // updateNote
  const updateTitle = (event) => {
    setInputValues((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const updateDescription = (event) => {
    setInputValues((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };

  const updateNoteValue = () => {
    updateNote(inputValues)
      .then((res) => {
        console.log(res);
        console.log("Note updated..");
      })
      .catch((err) => {
        console.log(err);
      });
    // setOpen(false);
  };

  // Archiver
  const updateArchive = (id) => {
    setvisibility(false)
    let archiveNote = {
      noteIdList: [id],
      isArchived: true,
    };
    updateArchiveNote(archiveNote)
      .then((res) => {
        console.log(res);
        console.log("Note Archived .....");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Trasher

  const onTrashNote = (id) => {
    console.log("ontrashnote click" , id)
    setvisibility(false)
    let trashNote = {
      noteIdList: [id],
      isDeleted: true,
    };
    trashedNote(trashNote)
      .then((res) => {
        console.log(res);
        console.log("Note Deleted .....");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const colorWidgetOpener =()=>{
      setOpener(true)
      setTimeout(() => {
        setOpener(false)
      }, 8000);
  }
  const yellowColorChanger = ()=>{
    document.querySelector('.card').style.backgroundColor = "#2ECC71"
  }
  const redColorChanger = ()=>{
    document.querySelector('.card').style.backgroundColor = "#F1948A"
  }
  const blueColorChanger = ()=>{
    document.querySelector('.card').style.backgroundColor = "#AAB7B8"
  }
  const burlyColorChanger = ()=>{
    document.querySelector('.card').style.backgroundColor = "#F5B7B1"
  }
  const brownColorChanger = ()=>{
    document.querySelector('.card').style.backgroundColor = "#F5B041"
  }
  const greenColorChanger = ()=>{
    document.querySelector('.card').style.backgroundColor = "#F1948A"
  }

  if(visible){ return (
    <div className='thirdmainbox'>
        <Card className='card'>
          <CardContent>
          <input type="text" id="thirdboxtitle" value={inputValues.title} placeholder="Title" onChange={updateTitle}/>
          <input type="text" id="thirdboxtitle" value={inputValues.description} placeholder="Description" onChange={updateDescription}/>
          </CardContent>
          <CardActions>
          <div className='thirdiconsbox'>
                    <span className="material-symbols-outlined hover color">
                    add_alert
                    </span>
                    <span onClick={colorWidgetOpener} className="material-symbols-outlined hover color">
                    palette
                    </span>
                    <span className="material-symbols-outlined hover color">
                    image
                    </span>
                    <span onClick={()=>updateArchive(props.notes.id)} className="material-symbols-outlined hover color" >
                    system_update_alt
                    </span>
                    <span onClick={()=>onTrashNote(props.notes.id)} className="material-symbols-outlined hover color" >
                    delete
                    </span>
                    <span onClick={()=>updateNoteValue()} className="material-symbols-outlined hover color">
                    check_circle
                    </span>
            </div>
          </CardActions>
        </Card>
        {opener? <div>
                <button onClick={yellowColorChanger} id='btn1' className='button'></button>
                <button onClick={redColorChanger} id='btn2' className='button'></button>
                <button onClick={blueColorChanger} id='btn3' className='button'></button>
                <button onClick={burlyColorChanger} id='btn4' className='button'></button>
                <button onClick={brownColorChanger} id='btn5' className='button'></button>
                <button onClick={greenColorChanger} id='btn6' className='button'></button>
            </div>:null}
    </div>
  )}
}

export default ThirdBox