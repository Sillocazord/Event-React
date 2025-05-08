import Header from "../../components/header/Header";
import Balao from "../../assets/img/balao.png"
import sim from "../../assets/img/sim.png"
import nao from "../../assets/img/nao.png"
import Footer from "../../components/footer/Footer";
import "./Evento.css";
const Evento = () => {
    return (
        <>
            <Header
                namaewa="Aluno" />

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
                                    <th>Tipo Evento</th>
                                    <th>Comentários</th>
                                    <th>Participar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="itens_eventos">
                                    <td data-cell="Título">Nome Evento</td>
                                    <td data-cell="Tipo Evento">Tipo Evento</td>
                                    <td data-cell="Comentários"><img src={Balao} alt="Balao de texto" /></td>
                                    <td data-cell="Participar"><img src={sim} alt="Confirmado" /></td>
                                </tr>

                                <tr className="itens_eventos">
                                    <td data-cell="Título">Nome Evento</td>
                                    <td data-cell="Tipo Evento">Tipo Evento</td>
                                    <td data-cell="Comentários"><img src={Balao} alt="Balao de texto" /></td>
                                    <td data-cell="Participar"><img src={nao} alt="Não confirmado" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Evento;