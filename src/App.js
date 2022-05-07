import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Note from './Components/Note';
import notesInfo from './notesInfo'

function App()
{
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
      <Footer />
    </div>
  )
}

export default App;
