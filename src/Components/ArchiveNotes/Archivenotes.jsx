import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './ArchiveNotes.css'

function Archivenotes(props) {
  return (
    <div id='archNotes'>
        <Card sx={{ maxWidth: 500 }}>
            <CardContent>
            <input type="text" id="thirdboxtitle" value={props.archivedNotes.title} placeholder="Title"/>
            <input type="text" id="thirdboxtitle" value={props.archivedNotes.description} placeholder="Title"/>
            </CardContent>
        </Card>
    </div>
  )
}

export default Archivenotes