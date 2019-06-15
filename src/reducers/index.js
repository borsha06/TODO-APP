import {combineReducers} from 'redux'

const taskReducer = (state = [], action )=>{
    switch(action.type){
        case 'ADD_TASk':
            state = state.concate(action.payload)
            break;
        case 'DELETE_TASK':
            state = state.slice()
            state.splice(action.payload,1)
            break
        default:
            return state

    }
 
    
}

const reducer = combineReducers({
    tasks:taskReducer
})

export default reducer