import Botao from "../botao/Botao";
import "./Cadastro.css"
import imagem from "../../assets/img/more.png"
import imagem2 from "../../assets/img/Imagem2.png"
import imagem3 from "../../assets/img/Imagem3.png"
const Cadastro = (props) => {


    return (
        <>
            <section className="section_cadastro">
                <form onSubmit={props.funcCadastro} className="layout-grid form_cadastro">

                    <h1>{props.tituloCadastro}</h1>
                    <hr />
                    {/* Imagens da pagina cadastro */}
                    <div className="cadastro_pai">
                        <div className="banner_cadastro" style={{ display: props.tovenono }}><img src={imagem} alt="Imagem" /></div>
                        <div className="banner_cadastro" style={{ display: props.toveno }}><img src={imagem2} alt="Imagem" /></div>
                        <div className="banner_cadastro" style={{ display: props.taveno }} ><img src={imagem3} alt="Imagem" /></div>

                        {/* Parte do input de todas as paginas cadastro */}
                        <div className="campos_cadastros">
                            <div className="campo_cad_nome">
                                <input placeholder={`${props.placeholder}`}
                                    value={props.valorInput}

                                    onChange={(e) => props.setValorInput(e.target.value)}

                                /> {/*Input de cadstro*/}
                            </div>

                            {/* Select da pagina Eventos */}
                            <div className="campo_cad_tipo" style={{ display: props.visibilidade }}>

                                <input type="datetime-local" placeholder="Data" />

                                <select name="TipoEvento" id=""
                                    value={props.valorSelect}
                                    onChange={(e) => props.setValorSelect(e.target.value)}>

                                    <option disabled value="" >Selecione</option>
                                    {props.listas &&
                                        props.listas.length > 0 &&
                                        props.listas.map((item) => (

                                            <option value={item.TipoEventoID}>{item.tituloTipoEvento}</option>
                                            //  key={item.TipoEventoID}
                                        )

                                        )}
                                </select>

                                {/* Instituições */}
                                <select name="Instituições" id="instituicao" value={props.InstiSelect}
                                    onChange={(e) => props.setInstiSelect(e.target.value)}>
                                    {props.listar &&
                                        props.listar.length > 0 &&
                                        props.listar.map((item) => (
                                            <option key={item.instituicaoID} value={item.instituicaoID}>
                                                {item.nomeFantasia}
                                            </option>
                                        )

                                        )}
                                    {/* <option value="" disabled selected>Senai</option>  */}

                                </select>

                                <input type="text" placeholder="Descrição" />

                            </div>
                            <Botao nomeDoBotao="Cadastrar" />
                        </div>

                    </div>


                </form>
            </section>
        </>
    )
}
export default Cadastro;