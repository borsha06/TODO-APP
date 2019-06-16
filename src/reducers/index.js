import {combineReducers} from 'redux'

const taskReducer = (state = [], action )=>{
    switch(action.type){
        case 'ADD_TASK':
            state = state.concat(action.payload)
            return state
        case 'DELETE_TASK':
            state = state.slice()
            console.log(state,action.payload)
            state.splice(action.payload,1)
            return state
            
        default:
            return state

    }
 
 
}

const reducer = combineReducers({
    tasks:taskReducer
})

export default reducer