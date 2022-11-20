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
                <Typography gutterBottom variant="h5" component="div">
                {props.archivedNotes.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.archivedNotes.description}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default Archivenotes