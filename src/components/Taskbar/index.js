import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addTask} from '../../actions/'

class Taskbar extends Component{
    render(){
        return(
        <div>
            <input type="text" placeholder="Enter your todo here" ref="task"/>
            <button onClick={()=> this.props.addTask(this.refs.task.value)}type="submit" >Add Todo</button>
        </div>
        )

    }
} 
function mapDispatchToProps(dispatch){
   // console.log(this.refs.task.value)
  return  bindActionCreators({addTask},dispatch)

}
export default connect(()=>{return {}},mapDispatchToProps)(Taskbar)