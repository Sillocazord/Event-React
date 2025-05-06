import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Listar from "../../components/listar/Listar";

const TipoEvento = () =>{
    return(
        <>
        <Header/>
        <Cadastro
        tituloCadastro= "Cadastro de Tipo Evento"
        visibilidade = "none"
        taveno = "none"
        toveno = "none"
        />
        <Listar
        tituloLista = "Lista de Tipos Eventos"
        nomezin= "Tipo Eventos"
        />
        <Footer/>
        </>
    )
}
export default TipoEvento;