import React, {Component} from 'react';
import logo1 from '../images/logo1.png';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <header>
                <Link to="/"><img className="img-logo" src={logo1} alt="Rosaly Jewelry"/></Link>

                <nav className="navbar navbar-expand-xl navbar-dark bg-dark menu">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item nav-item-custom">
                            <Link to="/">PÁGINA INICIAL</Link>
                        </li>
                        <li className="nav-item nav-item-custom">
                            <Link to="/paginaProdutos">NOSSOS PRODUTOS</Link>
                        </li>
                        <li className="nav-item nav-item-custom">
                            <Link to="/paginaContato">FALE CONOSCO</Link>
                        </li>
                        <li className="nav-item nav-item-custom">
                            <Link to="/paginaLojas">NOSSAS LOJAS</Link>
                        </li>
                    </ul>   
                </nav>
            </header>
         );
    }
}
 
export default Header;