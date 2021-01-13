import React, {Component} from 'react';

class Imagem extends Component {
    constructor(props) {
        super(props);
        this.state={src: process.env.PUBLIC_URL + '/' + props.src};
    }
    render() {
        return(
            <img src={this.state.src} alt={this.props.alt} />
        )
    }
}

export default Imagem;