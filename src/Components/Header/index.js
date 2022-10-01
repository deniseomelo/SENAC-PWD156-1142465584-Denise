import { Link } from "react-router-dom";
import './style.css';

function Header() {
    return (
        <header>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/cadastrocliente'>Cadastro Cliente </Link></li>
                <li><Link to='/contacorrente'>Movimentação c/c</Link></li>
                <li><Link to='/financiamento'>Financiamento</Link></li>
                <li><Link to='/sobrenos'>Sobre Nós</Link></li>
            </ul>
        </header>
    )
}
export default Header;
