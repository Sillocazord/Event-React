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
    //Para cadastro evento
    const [tipoDeEvento, setTipoDeEvento] = useState("")
    const [listaTipoEvento, setListarTipoEvento] = useState([])
    const [dataEvento, setDataEvento] = useState("")
    const [descricao, setDescricao] = useState("")
    const [instituicao, setInstituicao] = useState(["0EDD8C84-DD13-43AC-886E-85B5BA973C1"])
    // const [instituicaoSelect, setInstituicaoSelect] = useState("")
    //     //  ("0EDD8C84-DD13-43AC-886E-85B5BA973C16")
     const [evento, setEvento] = useState ("")
   //----------------------------------------------
    
   
    const [listaEvento, setListaEvento] = useState([])
    // const [editaEvento, setEditaEvento] = useState ([])
    //Atualizar evento
    //Alertas
        function alertar(icone, mensagem) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: icone,
                title: mensagem
            });
        }
        // json para cadastrar um evento:
// {
//   "dataEvento": "2025-05-26T20:12:21.564Z",
//   "nomeEvento": "C# Events",
//   "descricao": "Aqui temos uma descricao sobre o evento",
//   "idTipoEvento": "16f8e98f-e654-490e-a687-9933dc15093f",
//   "idInstituicao": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "instituicao": {
//  "idInstituicao": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "cnpj": "12345678000199",
//     "endereco": "Rua niteroi 180",
//     "nomeFantasia": "Senai"
//   }
 
// }
        async function cadastrarEvento(evt) {
            evt.preventDefault();
            if(evento.trim() !=""){
                try {
                    await api.post("evento",{
                      nomeEvento: evento,
                      dataEvento: dataEvento,
                      descricao: descricao,
                      tipoEventoID: tipoDeEvento,
                      instituicaoID: instituicao

                    });
                    alertar("success","Sucesso! Deu certo meu cria!!")
                    setEvento("")
                    setDataEvento("")
                    setDescricao("")
                    setTipoDeEvento("")
                    setInstituicao("")
                    listarEvento("")

                } catch (error) {
                    alertar("error","Erro! Entre em contato com o suporte!")
                    console.log(error);
                    
                }
            }
            else{
              alertar("error","Ta bugaddoooo")
            }
            
        }

        async function listarTipoEvento() {
        try {
            const resposta = await api.get("tipoEvento")
            setListarTipoEvento(resposta.data)
        } catch (error) {
            console.log(error);

        }
    }


        async function listarEvento() {
            try {
                const resposta = await api.get("evento")
                setListaEvento(resposta.data)
                // console.log("chego meu fí");
                
            } catch (error) {
                console.log(error);
                
            }
        }

        async function editarEvento(evento) {
  try {
    const tiposOptions = listaTipoEvento
      .map(tipo => `<option value="${tipo.tipoEventoID}" ${tipo.tipoEventoID === evento.tipoEventoID ? 'selected' : ''}>${tipo.tituloTipoEvento}</option>`)
      .join('');

    const { value } = await Swal.fire({
      title: "Editar Tipo de Evento",
      html: `
        <input id="campo1" class="swal2-input" placeholder="Título" value="${evento.nomeEvento || ''}">
        <input id="campo2" class="swal2-input" type="date" value="${evento.dataEvento?.substring(0, 10) || ''}">
        <select id="campo3" class="swal2-select">${tiposOptions}</select>
        <input id="campo4" class="swal2-input" placeholder="Categoria" value="${evento.descricao || ''}">
      `,
      showCancelButton: true,
      confirmButtonText: "Salvar",
      cancelButtonText: "Cancelar",
      focusConfirm: false,
      preConfirm: () => {
        const campo1 = document.getElementById("campo1").value;
        const campo2 = document.getElementById("campo2").value;
        const campo3 = document.getElementById("campo3").value;
        const campo4 = document.getElementById("campo4").value;

        if (!campo1 || !campo2 || !campo3 || !campo4) {
          Swal.showValidationMessage("Preencha todos os campos.");
          return false;
        }

        return { campo1, campo2, campo3, campo4 };
      }
    });

    if (!value) {
      console.log("Edição cancelada pelo usuário.");
      return;
    }

    console.log("Dados para atualizar:", value);

    await api.put(`evento/${evento.EventoID}`, {
      nomeEvento: value.campo1,
      dataEvento: value.campo2,
      tipoEventoID: value.campo3,  
      descricao: value.campo4,
    });

    console.log("Evento atualizado com sucesso!");
    Swal.fire("Atualizado!", "Dados salvos com sucesso.", "success");
    listarEvento();

  } catch (error) {
    console.log("Erro ao atualizar evento:", error);
    Swal.fire("Erro!", "Não foi possível atualizar.", "error");
  }
}

        useEffect(() => {
            listarEvento();
            listarTipoEvento();
        },[])
        

    return(
        <>
         <Header
         nomeUsuario = "Administrador"
         botaozinho = "none"
        />
        <Cadastro

        tituloCadastro= "Cadastro de Eventos"
        taveno = "none"
        tovenono = "none"
        placeholder = "Nome"

        ValorSelect={tipoDeEvento}
        setValorSelect={setListarTipoEvento}
        listas={listaTipoEvento}

        InstiSelect={instituicao}
        setInstiSelect={setInstituicao}
        listar={instituicao}

        setValorInput={setEvento}
        valorInput={evento}
        funcCadastro={cadastrarEvento}

        />
        <Listar
        tituloLista = "Lista de Eventos"
        nomezin= "Nome"
        edit = "Editar"
        // visibly = "none"
        editar ={editarEvento}
        tipoLista = "evento"
        lista = {listaEvento}
        />
        <Footer/>
        </>
    )
}
export default EventosListar;