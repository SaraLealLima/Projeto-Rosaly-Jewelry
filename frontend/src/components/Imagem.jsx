import React, {Component} from 'react';

class Imagem extends Component {
    constructor(props) {
        super(props);
        this.state={src: "http://rosalyjewelrybackend/" + props.src};
    }
    render() {
        return(
            <img src={this.state.src} />
        )
    }
}

export default Imagem;