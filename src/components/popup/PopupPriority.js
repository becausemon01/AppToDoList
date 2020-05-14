//libraries
import React, { Component } from "react";
import * as actions from "../../actions/index";
import { connect } from "react-redux";

class PopupPriority extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priority: 4,
    };
  }

  onClick = priority => {
    this.setState(
      {
        priority,
      },
      () => {
        this.props.onSetPriority(this.state);
        console.log(this.state);
      }
    );
  };
  render() {
    let { priority } = this.props;

    let elm_checker = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        width="12"
        height="12"
        aria-hidden="true"
        className="priority_item_checkmark"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z"
        ></path>
      </svg>
    );

    return (
      <div>
        <div className="dialog_nose"></div>
        <div className="dropdown_set_priority">
          <ul>
            <li className="option_priority" onClick={() => this.onClick(1)}>
              <div className="priority_pick_item">
                <span className="priority_item_icon">
                  <svg
                    data-svgs-path="sm1/priority_1.svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#d1453b"
                      fillRule="nonzero"
                      d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777z"
                    ></path>
                  </svg>
                </span>
                <span className="priority_item_name">Priority 1</span>
                {priority === 1 ? elm_checker : ""}
              </div>
            </li>

            <li className="option_priority" onClick={() => this.onClick(2)}>
              <div className="priority_pick_item">
                <span className="priority_item_icon">
                  <svg
                    data-svgs-path="sm1/priority_2.svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#EB8909"
                      fillRule="nonzero"
                      d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777z"
                    ></path>
                  </svg>{" "}
                </span>
                <span className="priority_item_name">Priority 2</span>
                {priority === 2 ? elm_checker : ""}
              </div>
            </li>

            <li className="option_priority" onClick={() => this.onClick(3)}>
              <div className="priority_pick_item">
                <span className="priority_item_icon">
                  <svg
                    data-svgs-path="sm1/priority_3.svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#246fe0"
                      fillRule="nonzero"
                      d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777z"
                    ></path>
                  </svg>
                </span>
                <span className="priority_item_name">Priority 3</span>
                {priority === 3 ? elm_checker : ""}
              </div>
            </li>

            <li className="option_priority" onClick={() => this.onClick(4)}>
              <div className="priority_pick_item">
                <span className="priority_item_icon">
                  <svg
                    data-svgs-path="sm1/priority_4.svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="nonzero"
                      d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777zm0-1.123C5.965 12.216 7.133 12 8.5 12c1.113 0 1.92.196 3.658.776 1.638.545 2.371.724 3.342.724 1.45 0 2.614-.262 3.5-.777V5.346c-.965.438-2.133.654-3.5.654-1.113 0-1.92-.196-3.658-.776C10.204 4.68 9.47 4.5 8.5 4.5c-1.45 0-2.614.262-3.5.777v7.377z"
                    ></path>
                  </svg>
                </span>
                <span className="priority_item_name">Priority 4</span>
                {priority === 4 ? elm_checker : ""}
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     tasks: state.tasks,
//   };
// };

const mapDispatchToProps = {};
export default connect(null, mapDispatchToProps)(PopupPriority);
