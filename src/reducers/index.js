import {combineReducers} from 'redux'
const initialState=[]
const taskReducer = (state = initialState, action )=>{
    switch(action.type){
        case 'ADD_TASK':
            return [
                ...state,
                action.payload]
           
        case 'DELETE_TASK':
            return [state.slice().splice(action.payload,1)]
            // state = state.slice()
            // state.splice(action.payload,1)
            // break
            
        default:
            return state

    }
 
 
}

const reducer = combineReducers({
    tasks:taskReducer
})

export default reducer