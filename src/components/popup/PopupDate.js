//libraries
import moment from "moment";
import React, { Component } from "react";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const setDay = date => {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let result = -1;
  days.forEach((day, index) => {
    if (day === date) {
      result = index + 1;
    }
  });

  return 10 - result - 2;
};

const onDate = (day, string) => {
  return moment(day).format(string);
};

// Search Date lam sau
// const viewDate = temp => {
//   const date = moment(temp).format
//   if(!temp && temp.length!== 0 ){

//   }
// }

class PopupEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: moment(new Date()).format("D MMM"),
      name: onDate(new Date(), "dddd D MMM YYYY"),
      selectedDay: null,
      date: "",
    };
  }

  onChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleDayClick = (day, { selected }) => {
    console.log(day);

    this.setState(
      {
        selectedDay: selected ? undefined : day,
      },
      () => {
        this.setState({
          date: moment(this.state.selectedDay).format("D MMM YYYY"),
          name: moment(this.state.selectedDay).format("D MMM YYYY"),
        });
        this.props.handleDate(
          moment(this.state.selectedDay).format("D MMM YYYY")
        );
      }
    );
  };
  onHandleTomorrow = () => {
    this.setState(
      {
        name: moment(new Date()).add(1, "day").format("D MMM YYYY"),
        date: moment(new Date()).add(1, "day").format("D MMM YYYY"),
      },
      () => {
        this.props.handleDate(this.state.date);
      }
    );
  };

  onHandleToday = () => {
    this.props.handleDate(moment(new Date()).format("D MMM YYYY"));
  };

  onHandleNextWeek = () => {
    const addDay = setDay(moment(new Date()).format("dddd"));
    const dayNextWeek = moment(new Date())
      .add(addDay, "day")
      .format("D MMM YYYY");
    this.setState({
      name: dayNextWeek,
    });
    this.props.handleDate(dayNextWeek);
  };

  onHandleNoDate = () => {
    this.props.handleDate("Schedule");
  };

  render() {
    console.log(this.state.name);
    console.log(this.state.name.length);
    console.log(moment("5 may").format("D MMM YYYY"));
    return (
      <div className="schedule_popper">
        <div>
          <div className="schedule">
            <div className="schedule_input">
              <input
                type="text"
                name="name"
                autoComplete="off"
                spellCheck="false"
                onChange={this.onChange}
                placeholder="Type a due date"
                value={this.state.name}
              />
            </div>

            <div className="schedule_review">
              <div className="schedule_review_content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="nonzero"
                    d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm10 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 8h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                  ></path>
                </svg>
                <div className="schedule_review_date">
                  <div className="schedule_review_date_info">
                    <span>1 Jan</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="schedule_suggestion">
              <button
                type="button"
                className="schedule_suggestion_item"
                onClick={this.onHandleToday}
              >
                <div className="schedule_suggestion_item_icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="scheduler-suggestions-item-icon--today"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <g fill="currentColor" fillRule="evenodd">
                      <path
                        fillRule="nonzero"
                        d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                        opacity=".1"
                      ></path>
                      <path
                        fillRule="nonzero"
                        d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                      ></path>
                      <text
                        fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                        fontSize="9"
                        transform="translate(4 2)"
                        fontWeight="500"
                      >
                        <tspan x="8" y="15" textAnchor="middle">
                          14
                        </tspan>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="schedule_suggestion_item_label">Today</div>
                <div className="schedule_suggestion_item_day">
                  {moment(new Date()).format("ddd")}
                </div>
              </button>

              <button
                type="button"
                className="schedule_suggestion_item"
                onClick={this.onHandleTomorrow}
              >
                <div className="schedule_suggestion_item_icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="scheduler-suggestions-item-icon--tomorrow"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <g fill="currentColor" fillRule="nonzero">
                      <path
                        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                        opacity=".1"
                      ></path>
                      <path d="M9.704 17.543a.5.5 0 0 1 .27.654l-.956 2.31a.5.5 0 0 1-.924-.383l.957-2.31a.5.5 0 0 1 .653-.27zm5.245.27l.957 2.31a.5.5 0 0 1-.924.383l-.956-2.31a.5.5 0 0 1 .923-.382zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm-5.543 6.796a.5.5 0 0 1-.27.653l-2.31.957a.5.5 0 0 1-.383-.924l2.31-.956a.5.5 0 0 1 .653.27zm11.74-.27l2.31.956a.5.5 0 0 1-.383.924l-2.31-.957a.5.5 0 0 1 .383-.923zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm-8.124-.406l2.31.957a.5.5 0 0 1-.383.923l-2.31-.956a.5.5 0 0 1 .383-.924zm16.9.27a.5.5 0 0 1-.27.654l-2.31.956a.5.5 0 0 1-.382-.923l2.31-.957a.5.5 0 0 1 .653.27zM9.019 3.495l.956 2.31a.5.5 0 0 1-.923.382l-.957-2.31a.5.5 0 1 1 .924-.382zm6.617-.27a.5.5 0 0 1 .271.652l-.957 2.31a.5.5 0 0 1-.923-.383l.956-2.31a.5.5 0 0 1 .653-.27z"></path>
                    </g>
                  </svg>
                </div>
                <div className="schedule_suggestion_item_label">Tomorrow</div>
                <div className="schedule_suggestion_item_day">
                  {moment(new Date()).add(1, "day").format("ddd")}
                </div>
              </button>

              <button
                type="button"
                className="schedule_suggestion_item"
                onClick={this.onHandleNextWeek}
              >
                <div className="schedule_suggestion_item_icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="scheduler-suggestions-item-icon--next-week"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <g fill="currentColor" fillRule="evenodd">
                      <path
                        fillRule="nonzero"
                        d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                        opacity=".1"
                      ></path>
                      <path
                        fillRule="nonzero"
                        d="M18 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12zm0 1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-2.109 8.188l.007.01-.004-.005-.003-.005zM17 8a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1h10zm-1 5.52a.504.504 0 0 1-.023.131l-.015.04a.494.494 0 0 1-.05.093l-.014.018a.503.503 0 0 1-.033.04l-2.511 2.512a.5.5 0 0 1-.765-.638l.057-.07L14.292 14H8.5a.5.5 0 0 1-.492-.41L8 13.5a.5.5 0 0 1 .41-.492L8.5 13h5.792l-1.646-1.646a.5.5 0 0 1 .638-.765l.07.057 2.511 2.513.017.019.009.01-.027-.03.03.035.029.04a.52.52 0 0 1 .066.162l.008.052v.007l-.002-.026.005.072v.02z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="schedule_suggestion_item_label">Next week</div>
                <div className="schedule_suggestion_item_day">Mon</div>
              </button>

              <button
                type="button"
                className="schedule_suggestion_item"
                onClick={this.onHandleNoDate}
              >
                <div className="schedule_suggestion_item_icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      fillRule="nonzero"
                      d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
                    ></path>
                  </svg>
                </div>
                <div className="schedule_suggestion_item_label">No Date</div>
              </button>
            </div>
            <div>
              <DayPicker
                selectedDays={this.state.selectedDay}
                month={new Date()}
                todayButton="Go to Today"
                onDayClick={this.handleDayClick}
                className="css"
                modifiers={{
                  foo: new Date(),
                }}
                onTodayButtonClick={(day, modifiers) =>
                  console.log(day, modifiers)
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(PopupEdit);
