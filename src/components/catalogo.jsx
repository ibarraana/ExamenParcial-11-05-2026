
function Catalogo({grilla, metodoSeleccionar}) {
    return (
        <div className="text-center">
            <p className="text-5xl">Destinos disponibles</p>

            <nav className="flex flex-wrap justify-center gap-4">
                {grilla.map((viajes) => (
                    <ul key={viajes.id}>
                        <li><b>Destino:</b>{viajes.destino}</li>
                        <li><img src={viajes.imagen} alt="Imagen del destino" width="450px" height="450px" /></li>
                        <li><b>Descripción:</b>{viajes.descripcion}</li>
                        <li><b>Precio base:</b> ${viajes.precioBase}</li>
                        <li><button onClick={() => metodoSeleccionar(viajes)} className="bg-yellow-300 px-4 py-2">Seleccionar este destino</button></li>
                    </ul>
                ))}
            </nav>

        </div>
    )
}

export default Catalogo