import React, {Component} from 'react';
import logo2 from '../images/logo2.png';
import formapagamento from '../images/formas-de-pagamento.png';
import { Link } from "react-router-dom";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer className="container-fluid" >
                <img width="150px" className="img-logo2" src={logo2} alt="Rosaly Jewelry Logo" />
                <br/><br/>
                <p>FORMAS DE PAGAMENTO ACEITAS</p>
                <p>Aceitamos boletos e os cartões das seguintes bandeiras:</p>
                <img width="300px" className="formas-de-pagamento" src={formapagamento} alt="Formas de pagamento aceitas" />
                <p className="copyright"> Copyright &copy; Sara Leal Lima, todos os direitos reservados.</p>
            </footer>
         );
    }
}
 
export default Footer;