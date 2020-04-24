import React, { Component } from "react";
import CreateTask from "./CreateTask";
import ListTask from "./ListTask";
import UpdateTask from "./UpdateTask";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import display from "../../reducers/display";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // tasks: [],
      // isDisplay: false,
      // isDisplayUpdate : false,
      taskUpdate: null,
    };

    // Gan 'this' la component
    // this.handleClick = this.handleClick.bind(this);
  }

  // componentWillMount(){
  //   if(localStorage && localStorage.getItem('tasks')){
  //     var tasks = JSON.parse(localStorage.getItem('tasks'));
  //     this.setState({
  //       tasks : tasks
  //     })
  //   };

  // };

  // onGenerateData = () =>{
  //   var tasks = [
  //     {
  //       id : this.generateID(),
  //       name : 'an trua'
  //     },
  //     {
  //       id: this.generateID(),
  //       name: 'an toi'
  //     },
  //     {
  //       id: this.generateID(),
  //       name: 'an sang'
  //     }
  //   ];
  //   this.setState({
  //     tasks : tasks
  //   });
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  generateID() {
    return (
      this.s4() +
      this.s4() +
      "_" +
      this.s4() +
      "_" +
      this.s4() +
      this.s4() +
      this.s4() +
      this.s4()
    );
  }

  // onSubmitUpdate = data => {
  //   var { tasks } = this.state;
  //   var index = this.findIndex(data.id);
  //   tasks[index] = data;
  //   this.setState({
  //     tasks: tasks,
  //     taskUpdate: null,
  //   });
  //   this.onCloseFormUpdate();
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // };

  // onSubmit = data => {
  //   var { tasks } = this.state;

  //   data.id = this.generateID();
  //   tasks.push(data);

  //   this.setState({
  //     tasks: tasks,
  //   });

  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // };

  onCreateTask = () => {
    // this.setState({
    //   isDisplay: !this.state.isDisplay,
    //   isDisplayUpdate : false,

    // })

    this.props.onCreateTask();
  };

  // onCloseForm = ()=>{
  //   this.setState({
  //     isDisplay: false
  //   })
  // };

  // onCloseFormUpdate = ()=>{
  //   this.setState({
  //     isDisplayUpdate: false
  //   })
  // };

  // onShowForm = ()=>{
  //   this.setState({
  //     isDisplayUpdate: true,
  //     isDisplay:false,
  //   })
  // };

  // onDelete = (id) =>{
  //   var {tasks}= this.state;
  //   var index = this.findIndex(id);
  //   if (index!==-1){
  //     tasks.splice(index,1);
  //     this.setState({
  //       tasks: tasks
  //     })
  //     localStorage.setItem("tasks",JSON.stringify(tasks));
  //   };
  //   // this.onCloseForm();

  // };

  // findIndex = (id) => {
  //   var { tasks } = this.state;
  //   var result = -1;
  //   tasks.forEach((task, index) => {
  //     if (id === task.id) result = index;
  //   });
  //   return result;
  // };

  // onUpdate = (id) =>{
  //   var {tasks}= this.state;
  //   var index = this.findIndex(id);
  //   var taskUpdate = tasks[index];
  //   this.setState({
  //     taskUpdate : taskUpdate
  //   });
  //   this.onShowForm();
  // }

  // this.handleAddTask = this.handleAddTask.bind(this);
  // handleAddTask() {
  //   this.setState(state=>({

  //   <div>
  //   <button type="button" id="add_a_task" style={{marginTop: '30px'}}>
  //     Add a task
  //   </button>
  // </div>
  //   }))
  // }

  render() {
    // var {
    //   //tasks,
    //   // isDisplay,
    //   // isDisplayUpdate,
    //   // taskUpdate,
    // } = this.state;

    // var elmStaks = tasks.map((task, index) => {
    //   return <ListTask
    //             key={task.id}
    //             task={task}
    //             onDelete = {this.onDelete}
    //             onUpdate = {this.onUpdate}
    //           />
    // });
    var { isDisplay, isDisplayUpdate } = this.props;

    // var elmUpdateTask = isDisplayUpdate === true? <UpdateTask
    //                                        onCloseFormUpdate= {this.onCloseFormUpdate}
    //                                       onSubmitUpdate ={this.onSubmitUpdate}
    //                                       task = {taskUpdate}
    //                                       /> :"";

    var elmCreateTask = isDisplay ? (
      <CreateTask
        onSubmit={this.onSubmit}
        //  onCloseForm = {this.onCloseForm}
      />
    ) : (
      ""
    );

    return (
      <div id="content">
        <div id="editor">
          <div id="agenda_view">
            <div className="section_day">
              <div>
                <h2 className="section_header">
                  <a>Today</a>
                  <small>Fri 20 Mar</small>
                </h2>
              </div>
              <ul className="items day_list ul_today">
                <li
                  className="agenda_item reorder_item"
                  style={{ fontSize: "0px", height: "0px", padding: "0px" }}
                ></li>

                <li className="agenda_add_task">
                  <ListTask
                    // tasks = {tasks}
                    onUpdate={this.onUpdate}
                    // onDelete = {this.onDelete}
                  />

                  {elmCreateTask}
                  {isDisplay ? (
                    ""
                  ) : (
                    <div>
                      <a className="action" onClick={this.onCreateTask}>
                        <code>
                          <span className="icon icon_add">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={13}
                              height={13}
                              viewBox="0 0 13 13"
                              data-svgs-path="sm1/plus.svg"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
                              ></path>
                            </svg>
                          </span>
                          Add task
                        </code>
                      </a>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplay: state.display,
    isDisplayUpdate: !state.display,
  };
};

// const mapDispatchToProps = (dispatch , props) => {
//   return {
//     onCreateTask : () => {
//       dispatch(actions.createForm())
//     },
//   };

// };

const mapDispatchToProps = {
  onCreateTask: actions.createForm,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
