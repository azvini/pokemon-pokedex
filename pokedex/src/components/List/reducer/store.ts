import { combineReducers, createStore } from 'redux'
import { listReducer } from '../ListElement.reducer'


let reducers = combineReducers({
    listReducer
})


export type RootState = ReturnType<typeof reducers>


export const store = createStore(reducers)