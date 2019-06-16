import {combineReducers} from 'redux'
const initialState={
    id:0
}
const taskReducer = (state = initialState, action )=>{
    switch(action.type){
        case 'ADD_TASK':
            return [
                ...state,
                {
                  id: state.length}]
           
        case 'DELETE_TASK':
            return state.filter(todo =>
                todo.id !== action.id
              );
            
        default:
            return state

    }
 
 
}

const reducer = combineReducers({
    tasks:taskReducer
})

export default reducer