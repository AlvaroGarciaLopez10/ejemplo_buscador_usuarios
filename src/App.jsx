import { useState } from 'react'
import './App.css'
import Header from './Header'
import { mock1 } from "./constants/users.js"
import Resultados from './Resultados'

function App() {
  const [query, setQuery] = useState("")
  const [resultado, setResultado] =useState(null)

  const callServer = () => {
    console.log("CLICK!")
    setResultado(mock1.users)
  }

  return (

    <div id="main">

    <Header/>

    <h2 id="buscador">Buscador de Usuarios</h2>
    <input type="text" id="query" value={query} onChnage={e=>setQuery(e.target.value)} placeholder="Texto a buscar"/>
    <button id="botonsearch" onClick={()=>callServer()}>Buscar</button>

    {resultado && <Resultados resultado={resultado}/>}
    </div>
  );
}

export default App
