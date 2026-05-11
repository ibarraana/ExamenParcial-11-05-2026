import Logo from "../assets/Logo-improvisado-agencia.png"

function Header() {
    return (
        <div className="header text-center">
            <img src={Logo} alt="Logo" />
            <h1>Cotizador de Paquetes Turísticos</h1>
        </div>
    )
}

export default Header