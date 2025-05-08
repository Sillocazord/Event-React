import "./Header.css";
import Logo from "../../assets/img/logo.svg"
import Portinha from "../../assets/img/Vector.png"
const Header = (props) => {
    return(
        <header>
            <link rel="stylesheet" href="https://use.typekit.net/pam4ubo.css"></link>

            <div className="layout_grid header-header">
            <img src={Logo} alt=""/>
            <nav className="nav_header">
                <a href="" className="link-header">Home</a>
                <a href="" className="link-header">Eventos</a>
                <a href="" className="link-header">Usuários</a>
                <a href="" className="link-header">Contatos</a>
                {/* <Link className="link-header" to="/">Home</Link>
                <Link className="link-header" to="/Eventos">Eventos</Link>
                <Link className="link-header" to="/Usuários">Usuários</Link>
                <Link className="link-header" to="/Contatos">Contatos</Link> */}
            </nav>
            <nav className="navas_header">
                <a href="" className="link-header">{props.namaewa}</a>
                <img src={Portinha} alt=""/>
                {/* <Link className="link-header" to="/login">Administrador</Link> */}
            </nav>
            </div>
        </header>
    )
}
export default Header;