import Catalogo from "./catalogo";
import DetalleCotizacion from "./detallecotizacion";

function CuerpoMain({grilla, viajeActual, seleccionar, opciones}) {
    return (
        <div className="text-center bg-fondo2">
           <Catalogo grilla={grilla} metodoSeleccionar={seleccionar} />
           <DetalleCotizacion opciones={opciones} viajeActual={viajeActual} />
        </div>
    )
}

export default CuerpoMain;