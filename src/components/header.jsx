import Logo from "../assets/Logo-improvisado-agencia.png"

function Header() {
    return (
        <div className="header text-center bg-fondo1">
            <img src={Logo} alt="Logo" />
            <h1 className="text-5xl">Cotizador de Paquetes Turísticos</h1>
        </div>
    )
}

export default Header