import { useEffect, useState } from "react"
import NodeList from "./components/NodeList"
import{nanoid} from 'nanoid'
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  
const [notes, setNotes]=useState([
  // Base de Donnée.
//   {
//   id:nanoid(),
//   text: "this is my first notes",
//   date: "15/03/2024"
// },
// {
//   id:nanoid(),
//   text: "this is my second notes",
//   date: "16/03/2024"
// },
// {
//   id:nanoid(),
//   text: "this is my third notes yep",
//   date: "17/03/2024"
// },

// {
//   id:nanoid(),
//   text: "this is fourth new note !",
//   date: "17/03/2024"
// },


])

const [searchText, setSearchText]=useState('')
const [darkMode, setDarkMode]= useState(false)

useEffect(()=>{
  const savednotes=JSON.parse(
    localStorage.getItem('notes-app-data')
  );
  if(savednotes){
    setNotes(savednotes);
  }
}, [])

useEffect(()=>{
  localStorage.setItem('notes-app-data',JSON.stringify(notes))
},[notes])

const addNote=(text)=>{
  const date=new Date()
  const newNote={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString()
  }
  const newNotes=[...notes, newNote]
  setNotes(newNotes)
};

const deleteNote=(id)=>{
  const newNotes =notes.filter((note)=>note.id !==id);
  setNotes(newNotes)
}


  return (
    <div className={darkMode? 'dark-mode':""}>
      <div className="container">

        <Header  handleToggleDark= {setDarkMode} />
        <Search  handleSearchNote= {setSearchText} />

        <NodeList  
          notes={notes.filter((note)=>
          note.text.toLowerCase().includes(searchText)
        )} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}/>
        
      </div>
    </div>
  )
}

export default App
