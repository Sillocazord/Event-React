import Header from "../../components/header/Header";
import Balao from "../../assets/img/balao.png"
import Footer from "../../components/footer/Footer";
import "./Evento.css";
import Checkin from "../../components/checkin/Checkin"
import Descrito from "../../assets/img/informacoes.png"
import { useEffect, useState } from "react";
import Modal from "../../components/modal/Modal";
import api from "../../Services/services";
import { format } from "date-fns";
const Evento = () => {

    const [listaEventos, setListaEventos] = useState([]);
    async function listarEventos() {
        try {
            const resposta = await api.get("evento");
            setListaEventos(resposta.data)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        listarEventos();
    }, [])

    return (
        
        <>
            <Header
                nomeUsuario="Aluno"
                botaozinho="none"
            />

            <section className="sessao">
                <div className="layout_grid div_evento">
                    <h1>Eventos</h1>
                    <hr />

                    <div className="eventos_select">
                        <select name="eventos" id="">
                            <option value="">Vivo</option>
                            <option value="">Tim</option>
                            <option value="">Claro</option>
                            <option value="">Oi</option>
                        </select>
                    </div>
                    <div className="tabela_eventos">
                        <table>
                            <thead>
                                <tr className="sub_eventos">
                                    <th>Título</th>
                                    <th>Data</th>
                                    <th>Tipo Evento</th>
                                    <th>Descrição</th>
                                    <th>Comentários</th>
                                    <th>Participar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaEventos.length > 0 ? (
                                    listaEventos.map((item) => (
                                         <tr key={item.eventoID} className="itens_eventos">
                                    <td data-cell="Título">{item.nomeEvento}</td>
                                    <td data-cell="Data">{format(item.dataEvento, "dd/MM/yy")}</td>
                                    <td data-cell="Tipo Evento">{item.tipoEvento.tituloTipoEvento}</td>
                                    <td data-cell="Descrição"><img src={Descrito} alt="Bolinha" /></td>
                                    <td data-cell="Comentários"><img src={Balao} alt="Balao de texto" /></td>
                                    <td data-cell="Participar"><Checkin /></td>
                                </tr>
                                    ))
                                ) : (
                                    <p>sei não vui</p>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Modal/>
            <Footer />
        </>
    )
}
export default Evento;