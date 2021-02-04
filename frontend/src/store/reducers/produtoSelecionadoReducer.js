import { PRODUTO_CLICADO } from '../actions/produtoSelecionadoActions';

var estadoInicial = {
   produtoSelecionado: null
}

export function produtoSelecionadoReducer(state = estadoInicial, action) {
    switch (action.type) {
        case PRODUTO_CLICADO:
            return { ...state, produtoSelecionado: action.valor }
        default:
            return state
    }
}
