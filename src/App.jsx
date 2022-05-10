import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Note from './Components/Note';
import notesInfo from './notesInfo'
import CreateArea from './Components/CreateArea';
import React, { useState } from "react";

function App()
{
  const [notes, setNotes] = useState([])

  function addNote(note)
  {
    setNotes(prevNotes =>
    {
      return [...prevNotes, note]
    })
  }

  return (
    <div className="App">
      <Header />
      {notesInfo.map((prop) =>
      (
        <Note
          key={prop.id}
          title={prop.title}
          content={prop.content}
        />)

      )}
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) =>
      {
        return <Note title={noteItem.title} content={noteItem.content} />
      })}
      <Footer />
    </div>
  )
}

export default App;
