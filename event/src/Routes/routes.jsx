import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import TipoEvento from "../pages/cadastroTipoEvento/TipoEvento";
import TipoUsuario from "../pages/cadastroTipoUsuario/TipoUsuario";
import EventosListar from "../pages/cadastroEvento/EventosListar";

const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>

            <Route path="/Login" element={<Login/>}/>
            <Route path="/Tipoevento" element={<TipoEvento/>}/>
            <Route path="/Tipousuario" element={<TipoUsuario/>}/>
            <Route path="/Cadastroevento" element={<EventosListar/>}/>

        </Routes>
        </BrowserRouter>
    )
}
export default Rotas;