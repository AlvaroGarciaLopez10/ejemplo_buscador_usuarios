import { useState } from 'react'
import './App.css'
import Header from './Header'
import { mock1 } from "./constants/users.js"
import Resultados from './Resultados'
import CONFIG from "./config/config.js"
import Formulario from './Formulario'

function App() {
  const [query, setQuery] = useState("")
  const [resultado, setResultado] =useState(null)

  const callServer = async (param) => { {/* await con funciones async */}
    console.log("CLICK!") 
    if(CONFIG.use_server){ {/* Si use_server=True, trae los datos del servidor */}
      try{
        let queryparams
        if(param==="all"){ {/*para distinguir si queremos buscar todos o no*/}
          queryparams = "?limit=" + CONFIG.num_items;
        } else {
          queryparams = "/search?q=" + query;
        }
        const response = await fetch(`${CONFIG.server_url}${queryparams}`);
        const data = await response.json();
        console.log(data);
        setResultado(data.users);
        setError(null);

      } catch(error){
        console.log(error);
        setError({description: error.message}); {/* guardamos el error */}
      }
    }else{ {/* Si no, los datos mock */}
      setResultado(mock1.users)
      setError(null);
    }
    
  }

  return (

    <div id="main">

    <Header/>

    <h2 id="buscador">Buscador de Usuarios</h2>
    <Formulario contenido={query} setContenido={setQuery} callServer={callServer}/> {/*Formulario*/}
    <button id="botonall" onClick={()=>callServer("all")}>Buscar Todos</button>
    {error && <h1>Ha habido un error: {error.description}</h1>}
    {resultado && <Resultados resultado={resultado}/>}


    </div>
  );
}

export default App
