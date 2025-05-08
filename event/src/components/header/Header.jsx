import "./Header.css";
import Logo from "../../assets/img/logo.svg"
import Portinha from "../../assets/img/Vector.png"
import { Link } from "react-router-dom";
const Header = (props) => {
    return(
        <header>
            <link rel="stylesheet" href="https://use.typekit.net/pam4ubo.css"></link>

            <div className="layout_grid header-header">
            <img src={Logo} alt=""/>
            <nav className="nav_header">
                {/* <a href="" className="link-header">Home</a>
                <a href="" className="link-header">Eventos</a>
                <a href="" className="link-header">Usuários</a> 
                <a href="" className="link-header">Contatos</a>*/}
                
                <Link className="link-header" to="/Evento">Home</Link>
                <Link className="link-header" to="/Tipoevento">Eventos</Link>
                <Link className="link-header" to="/Tipousuario">Usuários</Link>
                <Link className="link-header" to="/Cadastroevento">Contatos</Link> 
            </nav>
            <nav className="navas_header">
                
                <Link className="link-header" to="/">{props.namaewa}</Link>
                <img src={Portinha} alt=""/>
                {/* <a href="" className="link-header">{props.namaewa}</a> */}
            </nav>
            </div>
        </header>
    )
}
export default Header;