import { viajes } from "./data/viajes.json"
import { opciones } from "./data/opciones.json"
import { useState } from "react";

import CuerpoMain from "./components/cuerpomain"
import Header from "./components/header"
import Footers from "./components/footers"


function App() {

  const [viajeEleccion, setViajeEleccion] = useState(null);  

  return (

    
    <>
      <Header />
      <CuerpoMain grilla={viajes} viajeActual={viajeEleccion} 
        seleccionar={setViajeEleccion}  opciones={opciones.categorias} />
      <Footers />
    </>
  )
}

export default App
