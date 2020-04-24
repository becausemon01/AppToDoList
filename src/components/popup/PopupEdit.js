import React, { Component } from "react";
import * as actions from "../../actions/index";
import { connect } from "react-redux";

class PopupEdit extends Component {
  onDelete = () => {
    this.props.onDelete(this.props.task.id);

    // this.props.onDelete(this.props.id);
  };
  onEditTask = () => {
    this.props.onEditTask(this.props.task);
    this.props.onEditTaskPopupEdit(this.props.task);
  };
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr className="menu_item_edit menu_item">
              <td>
                <div className="menu_wrapper">
                  <span className="menu_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      data-svgs-path="sm1/edit.svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          fill="currentColor"
                          d="M9.5 19h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z"
                        />
                        <path
                          stroke="currentColor"
                          d="M4.42 16.03a1.5 1.5 0 0 0-.43.9l-.22 2.02a.5.5 0 0 0 .55.55l2.02-.21a1.5 1.5 0 0 0 .9-.44L18.7 7.4a1.5 1.5 0 0 0 0-2.12l-.7-.7a1.5 1.5 0 0 0-2.13 0L4.42 16.02z"
                        />
                      </g>
                    </svg>
                  </span>
                  <div className="menu_label" onClick={this.onEditTask}>
                    Edit Task
                  </div>
                </div>
              </td>
            </tr>
            <tr className="menu_item">
              <td>
                <div className="menu_wrapper">
                  <span className="menu_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      data-svgs-path="sm1/project.svg"
                    >
                      <path
                        fill="currentColor"
                        fillRule="nonzero"
                        d="M10.5 17h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zm0-6h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zm0-6h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zM5.75 18.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm0-6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm0-6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                      />
                    </svg>
                  </span>
                  <div className="menu_label">Go to project</div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="separator">
                <div />
              </td>
            </tr>
            <tr className="menu_item">
              <td>
                <div className="menu_wrapper">
                  <span className="menu_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      data-svgs-path="sm1/trash.svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M0 0h24v24H0z" />
                        <rect
                          width={14}
                          height={1}
                          x={5}
                          y={6}
                          fill="currentColor"
                          rx=".5"
                        />
                        <path
                          fill="currentColor"
                          d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z"
                        />
                        <path
                          stroke="currentColor"
                          d="M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z"
                        />
                      </g>
                    </svg>
                  </span>
                  <div className="menu_label" onClick={this.onDelete}>
                    Delete
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onDelete: actions.deleteTask,
  onEditTask: actions.updateTask,
};
export default connect(null, mapDispatchToProps)(PopupEdit);
