import React,{Component} from 'react'
import {connect} from 'react-redux'
import Task from '../Task/index'

 class Tasklist extends Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
               {this.props.tasks.map((task,index)=> <Task key={index} task={task}/>)}
                </tbody>
            </table>

        )
        
    }
} 
function mapStateToProps(state){
   // console.log(state.tasks)
    return{
        tasks:state.tasks
    }
    

}

export default connect(mapStateToProps)(Tasklist)