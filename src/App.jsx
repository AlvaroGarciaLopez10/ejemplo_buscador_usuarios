import { useState } from 'react'
import './App.css'
import Header from './Header'
import { mock1 } from "./constants/users.js"
import Resultados from './Resultados'
import CONFIG from "./config/config.js"

function App() {
  const [query, setQuery] = useState("")
  const [resultado, setResultado] =useState(null)

  const callServer = async () => { {/* await con funciones async */}
    console.log("CLICK!") 
    if(CONFIG.use_server){ {/* Si use_server=True, trae los datos del servidor */}
      const response = await fetch(CONFIG.server_url)
      const data = await response.json()
      console.log(data)
      setResultado(data.users)
    }else{ {/* Si no, los datos mock */}
      setResultado(mock1.users)
    }
    
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
