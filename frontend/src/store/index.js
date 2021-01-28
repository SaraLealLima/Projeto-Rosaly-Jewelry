import { combineReducers, createStore } from 'redux'
import { categoriasReducer } from './reducers/categoriasReducer'

var reducers = combineReducers({
    categoriasState: categoriasReducer
})


export const store = createStore(reducers)
