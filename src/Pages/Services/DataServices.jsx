import axios from "axios";

const headerConfig = {
    headers: { Authorization: localStorage.getItem('token') }
}

export const addNote = (notesObj)=>{
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",notesObj, headerConfig)
    return response;
}
export const getNoteList = () => {
    let res = axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?", headerConfig)
    return res;
}
export const updateArchiveNote = (noteObj) => {
    let res = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes", noteObj, headerConfig)
    return res;
}
export const trashedNote = (noteObj) => {
    let res = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes", noteObj, headerConfig)
    return res;
}
export const updateNote = (noteObj) => {
    let res = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes", noteObj, headerConfig)
    return res;
}