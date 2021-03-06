import { CATEGORIA_CLICADA, CATEGORIAS_CARREGADAS } from '../actions/categoriasActions'

var estadoInicial = {
    categorias: [
        {texto: 'Todas as jóias (15)', valor: 'todos'},
        {texto: 'Alianças (3)', valor: 'aliança'},
        {texto: 'Anéis (3)', valor: 'anel'},
        {texto: 'Colares (3)', valor: 'colar'},
        {texto: 'Brincos (3)', valor: 'brinco'},
        {texto: 'Pulseiras (3)', valor: 'pulseira'},
    ],
    categoriaSelecionada: 'todos'
}

export function categoriasReducer(state = estadoInicial, action) {
    switch (action.type) {
        case CATEGORIA_CLICADA:
            return { ...state, categoriaSelecionada: action.valor }
        case CATEGORIAS_CARREGADAS:
            return { ...state, categorias: action.valor }
        default:
            return state
    }
}
