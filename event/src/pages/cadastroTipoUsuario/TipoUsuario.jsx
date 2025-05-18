import Cadastro from "../../components/cadastro/Cadastro";
import Header from "../../components/header/Header";
import Listar from "../../components/listar/Listar";
import Footer from "../../components/footer/Footer";
const TipoUsuario = () => {
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
        tituloCadastro= "Cadastro de Tipo Usuario"
        visibilidade = "none"
        toveno = "none"
        tovenono = "none"
        />
        <Listar
        tituloLista = "Lista de Tipos Usuarios"
        nomezin= "Tipo Usuarios"
        visible = "none"
        editar = "Editar"
        />
        <Footer/>
        </>
)
}
export default TipoUsuario;