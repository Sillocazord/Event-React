import"./Listar.css"
import Lixinho from "../../assets/img/Lixo.png"
import Lapizinho from "../../assets/img/Lapis.png"
const Listar = (props) =>{
    return(
        <>
        <section className="layout-grid listagem">
            <h1>{props.tituloLista}</h1>
            <hr />
                <div className="tabela">    
                    <table>
                        <thead> {/*HEAD OF THE TABLE OTC ROMAN REIGNS!!🔵🗣️🗣️🗣️🔵🔥🔥🔥🔵*/}
                            <tr className="table_cabecalho">
                                <th>{props.nomezin}</th>
                                <th style={{display:props.visible}}>TipoEvento</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>{/* OF THE TABLE ROMAN REIGNS!!🔥🔥🔥🔵🗣️🗣️🗣️🔵🔥🔥🔥🔵 */}
                        
                        <tbody>
                                <tr className="item_lista">
                                    <td data-cell={props.nomezin}>Senai</td>
                                    <td style={{display:props.visible}} data-cell="TipoEvento">Gigachads</td>
                                    <td data-cell="Editar"><img src={Lapizinho} alt="lapizin" /></td>
                                    <td data-cell="Excluir"><img src={Lixinho} alt="lixin" /></td>
                                </tr>
                        </tbody>
                    </table>
                </div>
        </section>
        </>
    )
}
export default Listar;
