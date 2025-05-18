import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Listar from "../../components/listar/Listar";

const TipoEvento = () =>{
    return(
        <>
        <Header
<<<<<<< HEAD
        namaewa = "Administrador"
        />
        
=======
        nomeUsuario = "Administrador"/>
>>>>>>> 1f08931d28cbcf2321c29634c179b2a68a1a01d5
        <Cadastro
        tituloCadastro= "Cadastro de Tipo Evento"
        visibilidade = "none"
        taveno = "none"
        toveno = "none"
        />
        <Listar
        tituloLista = "Lista de Tipos Eventos"
        nomezin = "Tipo Eventos"
        visible = "none"
        editar = "Editar"
        />
        <Footer/>
        </>
    )
}
export default TipoEvento;