import Catalogo from "./catalogo";
import DetalleCotizacion from "./detallecotizacion";

function CuerpoMain({grilla}) {
    return (
        <>
           <Catalogo grilla={grilla}/>
           <DetalleCotizacion />
        </>
    )
}

export default CuerpoMain;