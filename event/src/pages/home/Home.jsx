import Botao from "../../components/botao/Botao";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import BannerHome from "../../assets/img/bannerhome.png"
import Banner2 from "../../assets/img/banner2.png"
import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => {
    return (   //Home meus crias
        <>

            <Header
                Usuario="none"
                naver="none"
            />
            <main className="layout_grid" >
                {/* Banner */}
                <div className="banner-div-home">
                    <img src={BannerHome} alt="Area de eventos da escola de informatica" />
                </div>
                {/* Banner */}

                {/* Cards */}
                <div className="cards-home">

                    <h2>Próximos Eventos</h2>
                    <hr />

                    <div className="card-pai">

                        <div className="cardzin">
                            <h2>Lorem</h2>
                            <p>Lorem ipsum dolor sit amet consecteturcorrupti tempora! Delectus fugia</p>
                            <Link className="link-card" to="/Login">Conectar</Link>
                        </div>

                        <div className="cardzin">
                            <h2>Lorem</h2>
                            <p>Lorem ipsum dolor sit amet consecteturcorrupti tempora! Delectus fugia</p>
                            <Link className="link-card" to="/Login">Conectar</Link>
                        </div>

                        <div className="cardzin">
                            <h2>Lorem</h2>
                            <p>Lorem ipsum dolor sit amet consecteturcorrupti tempora! Delectus fugia</p>
                            <Link className="link-card" to="/Login">Conectar</Link>
                        </div>

                        <div className="cardzin">
                            <h2>Lorem</h2>
                            <p>Lorem ipsum dolor sit amet consecteturcorrupti tempora! Delectus fugia</p>
                            <Link className="link-card" to="/Login">Conectar</Link>
                        </div>

                    </div> {/*Card-pai(aquele que configura os cardzin)*/}

                </div>
                {/* Cards */}

                {/*Segundo Banner */}
                <div className="segundo-banner">
                    {/* <img src={Banner2} alt="Imagem meio roxa com duas faixas escuras" /> */}
                    <h2>Visão</h2>
                    <hr />
                </div>
                {/*Segundo Banner */}

            </main>

            <Footer />
        </>
    )
}
export default Home;