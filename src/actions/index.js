export const addTask=(task) =>{
    
    return{
        type:'ADD_TASK',
        payload: task
    }
}
export const deleteTask =(taskid)=>{
    return{
        typee: 'DELETE_TASK',
        payload: taskid
    }
}
