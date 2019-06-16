export const addTask=(task) =>{
    
    return{
        type:'ADD_TASK',
        payload: task
    }
}
export const deleteTask =(taskid)=>{
    return{
        type: 'DELETE_TASK',
        payload: taskid
    }
}
