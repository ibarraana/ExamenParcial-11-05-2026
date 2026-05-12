

function DetalleCotizacion({opciones, viajeActual}) {


    return (
        <div className="bg-fondo4 text-white">
            <h2 className="text-4xl">Detalle Cotizacion</h2>     

            <nav>
               {opciones.map((opcion1) => (
                <div key={opcion1.viajeId} >
                    <p className="text-white">Identificador: {opcion1.viajeId}</p>          
                <div >          

                    {opcion1.opciones.map((opcion2) => (
                        <div key={opcion2}>
                            <p>{opcion2.nombre}</p>
                            <p>{opcion2.incremento}</p>            
                                <ul>
                                    {opcion2.incluye.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            ))}
                        </div>
                    </div>
                ))}  
            </nav>
        </div>      
    )
}

export default DetalleCotizacion