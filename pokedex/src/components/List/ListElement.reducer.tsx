import { Action } from './ListElement.action'

export interface ListState {
    lists: object[],
    loaded: boolean
}

const initialState = {
    lists: [{
        1: 'obj',
        2: 'obj2',
        3: 'obj3'
    }],
    loaded: false
}

export const listReducer = (state: ListState = initialState, action: Action) => {
    switch (action.type) {
        case "GET_LISTS": {
            state.lists = [{
                1: 'obj',
                2: 'obj2',
                3: 'obj3'
            }];
            state.loaded = true
            return {
                ...state,

            }
        }
        default:
            return state
    }
}