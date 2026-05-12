
function Catalogo({grilla}) {
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
                    </ul>
                ))}
            </nav>

        </div>
    )
}

export default Catalogo