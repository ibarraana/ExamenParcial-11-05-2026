

function DetalleCotizacion({opciones, viajeActual}) {


    return (
        <div className="bg-fondo4 text-white">
            <h2 className="text-4xl">Detalle Cotizacion</h2>     

            <nav className="flex gap-4">
               {JSON.stringify(opciones)}        
            </nav>
        </div>
           

    )
}

export default DetalleCotizacion