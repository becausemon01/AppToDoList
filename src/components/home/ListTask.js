// Libraries
import React, { Component } from "react";
import _ from "lodash";

// Components
import Task from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import UpdateTask from "./UpdateTask";
import UpdateTaskEdit from "./UpdateTaskEdit";

// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [remove] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, remove);
//   return result;
// };
class ListTask extends Component {
  constructor() {
    super();
    this.state = {
      currTaskID: "",
      idUpdate: "",
      isOpenFormEdit: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(this.props.tasks.length, prevProps.tasks.length)) {
      this.props.onSort();
    }
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

  onDragEnd = result => {
    console.log(result);
    this.setState({ result }, () => {
      console.log(this.state.result);
      this.props.onDragAndDrop(this.state.result, this.props.tasks);
    });
  };

  _handleSendIdEdit = task => {
    this.setState({
      idUpdate: task.id,
    });
  };
  onCloseFormEdit = () => {
    this.setState({
      isOpenFormEdit: false,
    });
  };
  onOpenFormEdit = () => {
    this.setState({
      isOpenFormEdit: true,
    });
  };
  render() {
    var { tasks } = this.props;

    let keyword = this.props.keywords.keyword;
    tasks = tasks.filter(task => {
      return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    // tasks.sort((a, b) => {
    //   if (a.priority > b.priority) return 1;
    //   else return 0;
    // });

    // tasks.sort((a, b) => {
    //   if (a.name > b.name) return 1;
    //   if (a.name < b.name) return -1;
    //   else return 0;
    // });

    var elmTask = tasks.map((task, index) => {
      return task.id === this.state.idUpdate && this.state.isOpenFormEdit ? (
        <div className="edit_updateTask" key={index}>
          <UpdateTaskEdit task={task} onCloseFormEdit={this.onCloseFormEdit} />
        </div>
      ) : (
        <Task
          key={index}
          task={task}
          index={index}
          isVisible={task.id === this.state.currTaskID ? true : false}
          _handleSendId={this._handleSendId}
          _handleSendIdToUpdateTask={this._handleSendIdToUpdateTask}
          _handleSendIdEdit={this._handleSendIdEdit}
          onOpenFormEdit={this.onOpenFormEdit}
          // onUpdate={this.props.onUpdate}
          // onDelete = {this.props.onDelete}
        />
      );
    });

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {elmTask}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,

    keywords: state.search,
  };
};
const mapDispatchToProps = {
  onDragAndDrop: actions.dragAndDrop,
  onSort: actions.onSort,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);
