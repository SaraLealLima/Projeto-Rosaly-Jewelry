export const PRODUTO_SELECIONADO = 'PRODUTO_SELECIONADO'

export const selecionarProduto = value => ({
    type: PRODUTO_SELECIONADO,
    valor: value
})