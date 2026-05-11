import { opciones } from "./data/opciones.json"
import { viajes } from "./data/viajes.json"

import CuerpoMain from "./components/cuerpomain"
import Header from "./components/header"
import Footers from "./components/footers"


function App() {
  

  return (
    <>
      <Header />
      <CuerpoMain grilla={viajes} />
      <Footers />
    </>
  )
}

export default App
