//import de componentas
import Footer from "../../components/footer/Footer";
import Listar from "../../components/listar/Listar";
import Cadastro from "../../components/cadastro/Cadastro";
import Header from "../../components/header/Header";
//import de componentes
import api from "../../Services/services";
import Swal from "sweetalert2";
import { useEffect,useState } from "react";
const EventosListar = () => {
    //Constantes
    const [tipoDeEvento, setTipoDeEvento] = useState("")
    const [evento, setEvento] = useState ("")





    return(
        <>
         <Header
         nomeUsuario = "Administrador"
         botaozinho = "none"
        />
        <Cadastro
        tituloCadastro= "Cadastro de Eventos"
        // visibilidade = "none"
        taveno = "none"
        // toveno = "none"
        tovenono = "none"
        />
        <Listar
        tituloLista = "Lista de Eventos"
        nomezin= "Nome"
        edit = "Editar"
        // visibly = "none"
        editar = "Editar"
        />
        <Footer/>
        </>
    )
}
export default EventosListar;