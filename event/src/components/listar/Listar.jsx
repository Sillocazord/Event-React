import "./Listar.css"
import Lixinho from "../../assets/img/Lixo.png"
import Lapizinho from "../../assets/img/Lapis.png"
const Listar = (props) => {
    return (
        <>
            <section className="listagem">
                <div className="layout_grid div_tabela">
                    <h1>{props.tituloLista}</h1>
                    <hr />

                    <div className="tabela">
                        <table>
                            <thead> 
                                <tr className="table_cabecalho">
                                    <th>{props.nomezin}</th>
                                    <th style={{ display: props.visible }}>TipoEvento</th>
                                    <th>{props.editar}</th>
                                    <th style={{ display: props.visibly }}>Excluir</th>
                                    {/* <th id="sim" style={{display:props.acao}}>Ações</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="item_lista">
                                    <td data-cell={props.nomezin}>Senai</td>
                                    <td style={{ display: props.visible }} data-cell="TipoEvento">Gigachads</td>
                                    <td data-cell="Editar Ações"><img src={Lapizinho} alt="lapizin" /></td>
                                    <td data-cell="Excluir Ações"><img src={Lixinho} alt="lixin" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Listar;
