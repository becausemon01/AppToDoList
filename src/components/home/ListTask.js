import React, { Component } from "react";
import Task from "./Task";
import { connect } from "react-redux";
import UpdateTask from "./UpdateTask";

class ListTask extends Component {
  constructor() {
    super();
    this.state = {
      currTaskID: "",
      idUpdate: "",
    };
  }

  _handleSendId = task => {
    this.setState({
      currTaskID: task.id,
    });
  };
  _handleSendIdToUpdateTask = task => {
    this.setState({
      idUpdate: task.id,
    });
  };
  render() {
    var { tasks } = this.props;
    let keyword = this.props.keywords.keyword;
    tasks = tasks.filter(task => {
      return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    var elmTask = tasks.map((task, index) => {
      return task.id === this.state.idUpdate ? (
        <UpdateTask key={index} />
      ) : (
        <Task
          key={index}
          task={task}
          isVisible={task.id === this.state.currTaskID ? true : false}
          _handleSendId={this._handleSendId}
          _handleSendIdToUpdateTask={this._handleSendIdToUpdateTask}
          // onUpdate={this.props.onUpdate}
          // onDelete = {this.props.onDelete}
        />
      );
    });

    return <div>{elmTask}</div>;
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,

    keywords: state.search,
  };
};

export default connect(mapStateToProps, null)(ListTask);
