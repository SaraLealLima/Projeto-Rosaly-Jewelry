import React, {Component} from 'react';

class Produto extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div className="box-produto col-xs-6 col-md-6 col-lg-4">
                <img src="" alt="" />
                <br/>
                <p className="nome-produto"></p>
                <hr/>
                <p className="antigo-preco"></p>
                <p className="novo-preco"></p>
            </div>
        )
    }
}

export default Produto;