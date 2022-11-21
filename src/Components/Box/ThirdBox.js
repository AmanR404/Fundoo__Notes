import React from 'react'
import './ThirdBox.css'
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { updateArchiveNote } from '../../Pages/Services/DataServices';
import { trashedNote } from '../../Pages/Services/DataServices';

function ThirdBox(props) {

  const[visible, setvisibility] = useState(true)
  const [opener, setOpener] = useState(false)

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
    document.querySelector('.card').style.backgroundColor = "rgb(241, 241, 51)"
  }
  const redColorChanger = ()=>{
    document.querySelector('.card').style.backgroundColor = "rgb(194, 65, 65)"
  }
  const blueColorChanger = ()=>{
    document.querySelector('.card').style.backgroundColor = "rgb(139, 139, 241)"
  }
  const burlyColorChanger = ()=>{
    document.querySelector('.card').style.backgroundColor = "burlywood"
  }
  const brownColorChanger = ()=>{
    document.querySelector('.card').style.backgroundColor = "rgb(87, 45, 45)"
  }
  const greenColorChanger = ()=>{
    document.querySelector('.card').style.backgroundColor = "rgb(83, 151, 83)"
  }

  if(visible){ return (
    <div className='thirdmainbox'>
        <Card className='card' sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {props.notes.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.notes.description}
            </Typography>
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
                    <span className="material-symbols-outlined hover color">
                    more_vert
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