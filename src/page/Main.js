//libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import moment from "moment";

//component
import CreateTask from "../components/CreateTask";
import ListTask from "../components/ListTask";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    //   localStorage.setItem("tasks", JSON.stringify(tasks));

    onCreateTask = () => {
        this.props.onCreateTask();
    };

    //     localStorage.setItem("tasks",JSON.stringify(tasks));

    render() {
        let { isDisplay, value } = this.props;

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
                                    <a>{value.value}</a>
                                    <small>
                                        {moment(new Date()).format("ddd D MMM")}
                                    </small>
                                </h2>
                            </div>
                            <ul className="items day_list ul_today">
                                <li
                                    className="agenda_item reorder_item"
                                    style={{
                                        fontSize: "0px",
                                        height: "0px",
                                        padding: "0px",
                                    }}
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
                                            <a
                                                className="action"
                                                onClick={this.onCreateTask}
                                            >
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
        value: state.value,
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
