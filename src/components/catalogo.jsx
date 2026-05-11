
function Catalogo({grilla}) {
    return (
        <div className="text-center">
            <h2>Destinos disponibles</h2>

            <nav>
                {grilla.map((viajes) => (
                    <ul key={viajes.id}>
                        <li>{viajes.destino}</li>
                        <li><img src={viajes.imagen} alt="Imagen del destino" width="450px" height="450px" /></li>
                        <li>{viajes.descripcion}</li>
                        <li>Precio base: ${viajes.precioBase}</li>
                    </ul>
                ))}
            </nav>

        </div>
    )
}

export default Catalogo