import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import TipoEvento from "../pages/cadastroTipoUsuario/TipoEvento";

const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>

            <Route path="/Login" element={<Login/>}/>
            <Route path="/Tipoevento" element={<TipoEvento/>}/>

        </Routes>
        </BrowserRouter>
    )
}
export default Rotas;