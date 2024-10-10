import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'
function NodeList({notes, handleAddNote, handleDeleteNote}) {
  return (
    <div className='notes-list'>
       {notes.map(note=>(
            <Notes id={note.id} 
            text={note.text} 
            date={note.date} 
            handleDeleteNote= {handleDeleteNote} />
        ))}

        <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NodeList