import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import ContaCorrente from './pages/ContaCorrente';
import Financiamento from './pages/Financiamento';
import SobreNos from './pages/SobreNos';
import Header from "./Components/Header";

function RouterApp () {
    return(
       <BrowserRouter>
           <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Cadastro" element={<Cadastro/>}/>
              <Route path="/contacorrente" element={<ContaCorrente/>}/>
              <Route path="/Financiamento" element={<Financiamento/>}/>
              <Route path="/SobreNos" element={<SobreNos/>}/>   
          </Routes>
       </BrowserRouter> 

   )
}

export default RouterApp;
