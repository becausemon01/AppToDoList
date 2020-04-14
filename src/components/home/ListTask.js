import React, { Component} from 'react'
import Task from './Task'
import {connect} from 'react-redux';

class ListTask extends Component {
    
    render (){
        var {tasks, keyword} = this.props;
        tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        });
        var elmTask = tasks.map((task, index) => {
            return <Task 
                        key = {index}
                        task = {task}
                        onUpdate = {this.props.onUpdate}
                        // onDelete = {this.props.onDelete}
                        />
        });
       
        return (
            <div>
            {elmTask}
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        tasks : state.tasks,
        keyword : state.search
    }
};

export default connect(mapStateToProps, null)(ListTask);