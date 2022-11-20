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

  // Archiver
  const updateArchive = (id) => {
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
    // setvisibility(false)
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
  if(visible){ return (
    <div className='thirdmainbox'>
        <Card sx={{ maxWidth: 345 }}>
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
                    <span className="material-symbols-outlined hover color">
                    palette
                    </span>
                    <span className="material-symbols-outlined hover color">
                    image
                    </span>
                    <span className="material-symbols-outlined hover color" onClick={console.log("Archived")}>
                    system_update_alt
                    </span>
                    <span className="material-symbols-outlined hover color" onClick={console.log("Deleted")}>
                    delete
                    </span>
                    <span className="material-symbols-outlined hover color">
                    more_vert
                    </span>
            </div>
          </CardActions>

        </Card>
    </div>
  )}
}

export default ThirdBox