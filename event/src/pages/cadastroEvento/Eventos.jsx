import Footer from "../../components/footer/Footer";
import Listar from "../../components/listar/Listar";
import Cadastro from "../../components/cadastro/Cadastro";
import Header from "../../components/header/Header";
const Eventos = () => {
    return(
        <>
         <Header/>
        <Cadastro
        tituloCadastro= "Cadastro de Eventos"
        // visibilidade = "none"
        taveno = "none"
        // toveno = "none"
        tovenono = "none"
        />
        <Listar
        tituloLista = "Lista de Eventos"
        nomezin= "Eventos"
        />
        <Footer/>
        </>
    )
}
export default Eventos;