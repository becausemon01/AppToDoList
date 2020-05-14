import React, { Component } from "react";
import * as actions from "../../actions/index";
import { connect } from "react-redux";

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }

  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    var { tasks } = this.props;
    var { keyword } = this.state;
    var count = keyword.length;
    var gt;

    var elmSearch = tasks.map((task, index) => {
      if (keyword.length !== 0) {
        if (task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
          gt = true;
          return (
            <div key={index} className="task_item_detail">
              <div className="checker">
                <div className="checkbox1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="currentColor"
                      d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div> {task.name}</div>
            </div>
          );
        } else {
          return null;
        }
      }

      return null;
    });

    return (
      <div id="top_bar">
        <div id="top_bar_inner">
          <a className="left_menu_toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              data-svgs-path="sm1/menu.svg"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"
              ></path>
            </svg>
          </a>
          <div id="logo">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                data-svgs-path="sm1/todoist_logo.svg"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M21 0H3a3 3 0 0 0-3 3v3.7L4 9c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.2.1.6 0 .7L5.1 11c-.4.3-.7.3-1.2 0L0 8.8v2l4 2.4c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.1.1.5 0 .6l-9.7 5.6c-.4.2-.7.3-1.2 0A857 857 0 0 1 0 13v2l4 2.3c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.2.1.6 0 .7l-9.7 5.5c-.4.3-.7.3-1.2 0a857 857 0 0 1-4-2.3v4A3 3 0 0 0 3 24h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3"
                ></path>
              </svg>
            </a>
          </div>
          <div id="top_icons">
            <span id="syns_state_icon" />
            <span id="quick_add_task">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  data-svgs-path="sm1/plus_m.svg"
                >
                  <g fill="none" fillRule="evenodd" transform="translate(4 3)">
                    <mask id="jd4FBg" fill="#fff">
                      <path d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"></path>
                    </mask>
                    <g mask="url(#jd4FBg)">
                      <path fill="currentColor" d="M-4-3h24v24H-4z"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </span>
            <span id="before_pie" style={{ display: "none" }} />
            <span id="top_completed_holder">
              <a className="fixed_pos">
                <span id="top_completed" className="completed_pie">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <defs></defs>
                    <g
                      fill="none"
                      fillRule="evenodd"
                      transform="translate(3 3)"
                    >
                      <mask id="4ZtaWA" fill="#fff">
                        <path
                          id="a"
                          d="M12.3 5L7 10.3 5.4 8.6a.5.5 0 0 0-.8 0l-3.9 4a9 9 0 1 1 .5.9L5 9.7l1.6 1.7a.5.5 0 0 0 .8 0L13 5.7v3.8a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.8z"
                        ></path>
                      </mask>
                      <g mask="url(#4ZtaWA)">
                        <path fill="#ffffff" d="M-3-3h24v24H-3z"></path>
                      </g>
                    </g>
                  </svg>
                  <span className="count">263</span>
                </span>
              </a>
            </span>
            <span id="top_notifications">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                data-svgs-path="sm1/notifications.svg"
              >
                <defs>
                  <path
                    id="sm1/notifications/a"
                    d="M10.8 16a3 3 0 0 1-5.6 0h5.6zM5 15h6-6zm-3.8 0a1 1 0 0 1-.8-1.5 16 16 0 0 0 2.1-8 5.5 5.5 0 0 1 11 0c0 2.8.7 5.5 2.1 8a1 1 0 0 1-.8 1.5H1.2z"
                  ></path>
                </defs>
                <g fill="none" fillRule="evenodd" transform="translate(4 3)">
                  <mask id="sm1/notifications/b" fill="#fff">
                    <use xlinkHref="#sm1/notifications/a"></use>
                  </mask>
                  <g mask="url(#sm1/notifications/b)">
                    <path fill="currentColor" d="M-4-3h24v24H-4z"></path>
                  </g>
                </g>
              </svg>
            </span>
            <span id="top_gear" className="fixed_pos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                data-svgs-path="sm1/gear.svg"
                className="gear_normal"
              >
                <path
                  fill="currentColor"
                  fillRule="nonzero"
                  d="M16.523 6.38l1.193-.598a1 1 0 0 1 1.314.394l1.529 2.648a1 1 0 0 1-.317 1.335l-1.204.793a7.263 7.263 0 0 1-.026 2.079l1.23.81a1 1 0 0 1 .317 1.335l-1.529 2.648a1 1 0 0 1-1.314.394l-1.345-.674a7.194 7.194 0 0 1-1.757 1.027l-.087 1.488a1 1 0 0 1-.998.941H10.47a1 1 0 0 1-.998-.941L9.39 18.65a7.188 7.188 0 0 1-1.883-1.045l-1.223.613a1 1 0 0 1-1.314-.394l-1.529-2.648a1 1 0 0 1 .317-1.335l1.05-.692a7.242 7.242 0 0 1-.03-2.318l-1.02-.672a1 1 0 0 1-.317-1.335L4.97 6.176a1 1 0 0 1 1.314-.394l1.068.536a7.191 7.191 0 0 1 2.05-1.173l.071-1.204A1 1 0 0 1 10.471 3h3.058a1 1 0 0 1 .998.941l.075 1.283a7.197 7.197 0 0 1 1.921 1.156zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                ></path>
              </svg>
            </span>
          </div>
          <div id="quick_find">
            <form onSubmit={this.onSubmit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={24}
                height={24}
                data-svgs-path="sm1/search.svg"
                className="search_icon"
              >
                <defs>
                  <path
                    id="sm1/search/a"
                    d="M11.44 10.73l4.41 4.42a.5.5 0 0 1-.7.7l-4.42-4.41a6.5 6.5 0 1 1 .7-.71zM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                  ></path>
                </defs>
                <g fill="none" fillRule="evenodd" transform="translate(4 4)">
                  <mask id="sm1/search/b" fill="#fff">
                    <use xlinkHref="#sm1/search/a"></use>
                  </mask>
                  <g mask="url(#sm1/search/b)">
                    <path fill="currentColor" d="M-3-4h24v24H-4z"></path>
                  </g>
                </g>
              </svg>
              <input
                type="text text_box"
                placeholder="Quick find"
                autoComplete="off"
                spellCheck="false"
                className="quick_find fixed_pos"
                name="keyword"
                onChange={this.onChange}
                value={keyword}
              />

              <code>
                {count !== 0 && gt === true ? (
                  <div>
                    <ul className="list_search">
                      <li>
                        <div className="list_search_detail">
                          <div className="checker"></div>
                          <div className="content_search">
                            <div className="content_search_text">
                              {elmSearch}
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </code>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    keyword: state.search,
  };
};

export default connect(mapStateToProps, null)(TopBar);
