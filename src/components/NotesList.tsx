import * as React from 'react';
import { Note } from '../models/note.model';
import Notes from './Notes';

interface INotesListProps {
    notes:Note[],
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FunctionComponent<INotesListProps> = ({notes,setNotes}) => {
const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id));
    }
 const renderNotes=()=>{
   return notes.map(note=>{
   return <Notes key={note.id} note={note} handleDelete={ handleDelete } />})
 }
    return (
    <>
    <h2>NotesList</h2>
    <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
