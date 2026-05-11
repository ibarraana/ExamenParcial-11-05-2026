import Catalogo from "./catalogo";
import DetalleCotizacion from "./detallecotizacion";

function CuerpoMain({grilla}) {
    return (
        <div className="text-center bg-fondo2">
           <Catalogo grilla={grilla}/>
           <DetalleCotizacion />
        </div>
    )
}

export default CuerpoMain;