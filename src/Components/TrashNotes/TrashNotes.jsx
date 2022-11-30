import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './TrashNotes.css'

function TrashNotes(props) {
  return (
    <div id='archNotes'>
    <Card sx={{ maxWidth: 325 }}>
        <CardContent>
        <input type="text" id="thirdboxtitle" value={props.trashedNotes.title} placeholder="Title"/>
        <input type="text" id="thirdboxtitle" value={props.trashedNotes.description} placeholder="Title"/>
        </CardContent>
    </Card>
</div>
  )
}

export default TrashNotes