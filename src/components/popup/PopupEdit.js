//libraries
import moment from "moment";
import React, { Component } from "react";
import * as actions from "../../actions/index";
import { connect } from "react-redux";

//component
import PopupProject from "./PopupProject";

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

class PopupEdit extends Component {
    onDelete = () => {
        this.props.onDelete(this.props.task.id);

        // this.props.onDelete(this.props.id);
    };
    onEditTask = () => {
        this.props.onOpenFormEdit();
        // this.props.onEditTask(this.props.task);
        this.props.onEditTaskPopupEdit(this.props.task);
        this.props.onCloseForm();
    };

    onClick = priorities => {
        this.props.onUpdate(this.props.task.id, { priority: priorities });
        console.log(this.props.task);
    };

    handelClickTomorrow = () => {
        const day = moment(new Date()).add(1, "day").format(" dddd D MMM YYYY");
        this.props.onUpdate(this.props.task.id, { deadLine: day });
    };

    handelClickToday = () => {
        const day = moment(new Date()).format(" dddd D MMM YYYY");
        this.props.onUpdate(this.props.task.id, { deadLine: day });
    };

    handelClickNextDay = () => {
        const day = moment(this.props.task.deadLine)
            .add(1, "day")
            .format(" dddd D MMM YYYY");
        console.log(day);
        this.props.onUpdate(this.props.task.id, { deadLine: day });
    };

    handelClickNextWeek = () => {
        const addDay = setDay(moment(new Date()).format("dddd"));
        const day = moment(new Date()).add(addDay, "day").format("D MMM");

        this.props.onUpdate(this.props.task.id, { deadLine: day });
    };

    onGotoProject = () => {
        this.props.onGetValue({ value: this.props.task.Project });
    };

    render() {
        const elmProject = <PopupProject />;

        return (
            <div>
                <table>
                    <tbody>
                        <tr
                            className="menu_item_edit menu_item"
                            onClick={this.onEditTask}
                        >
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
                                    <div className="menu_label">Edit Task</div>
                                </div>
                            </td>
                        </tr>
                        <tr className="menu_item" onClick={this.onGotoProject}>
                            <td>
                                <div className="menu_wrapper">
                                    <span className="menu_icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
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
                                    <div className="menu_label">
                                        Go to project
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="separator">
                                <div />
                            </td>
                        </tr>

                        <tr className="no_hover">
                            <td>
                                <div>
                                    <div className="schedule_holder">
                                        <span className="desc">Schedule</span>
                                        <div className="icon_list">
                                            <a
                                                className="icon_scheduler icon_suggestion"
                                                onClick={
                                                    this.handelClickTomorrow
                                                }
                                            >
                                                <span>
                                                    <svg
                                                        width={28}
                                                        height={28}
                                                        data-svgs-path="sm1/scheduler_smart_date.svg"
                                                    >
                                                        <g
                                                            fill="currentColor"
                                                            fillRule="nonzero"
                                                        >
                                                            <path d="M12.996 2.532a.5.5 0 0 1-.431.56C7.12 3.803 3 8.46 3 14c0 6.075 4.925 11 11 11 5.54 0 10.198-4.12 10.907-9.564a.5.5 0 0 1 .992.13C25.125 21.505 20.045 26 14 26 7.373 26 2 20.627 2 14 2 7.955 6.495 2.875 12.436 2.101a.5.5 0 0 1 .56.431zm8.309 1.947a11.988 11.988 0 0 1 4.594 7.957.5.5 0 0 1-.992.129 10.988 10.988 0 0 0-4.211-7.293.5.5 0 0 1 .609-.793zm-5.83-2.381l.09.003c1.047.137 2.064.41 3.03.81a.5.5 0 1 1-.384.924 10.921 10.921 0 0 0-2.775-.742.5.5 0 0 1-.048-.983l.087-.012z" />
                                                            <text
                                                                fontFamily="-apple-system, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
                                                                fontSize={12}
                                                                fontWeight={500}
                                                            >
                                                                <tspan
                                                                    x={14}
                                                                    y={18}
                                                                    textAnchor="middle"
                                                                >
                                                                    {moment(
                                                                        new Date()
                                                                    )
                                                                        .add(
                                                                            1,
                                                                            "day"
                                                                        )
                                                                        .format(
                                                                            "D"
                                                                        )}
                                                                </tspan>
                                                            </text>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </a>

                                            <a
                                                className="icon_scheduler icon_today"
                                                onClick={this.handelClickToday}
                                            >
                                                <svg
                                                    width={28}
                                                    height={28}
                                                    viewBox="0 0 28 28"
                                                    data-svgs-path="sm1/scheduler_today.svg"
                                                >
                                                    <g
                                                        fill="currentColor"
                                                        fillRule="nonzero"
                                                    >
                                                        <path
                                                            d="M6 3.5h16A2.5 2.5 0 0 1 24.5 6v2.5h-21V6A2.5 2.5 0 0 1 6 3.5z"
                                                            opacity=".1"
                                                        />
                                                        <path d="M22 3a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16zm0 1H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-.5 4a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1z" />
                                                        <text
                                                            fontFamily="-apple-system, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
                                                            fontSize={11}
                                                            transform="translate(4 2)"
                                                        >
                                                            <tspan
                                                                x="9.5"
                                                                y={18}
                                                                textAnchor="middle"
                                                            >
                                                                {moment(
                                                                    new Date()
                                                                ).format("D")}
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                </svg>
                                            </a>

                                            <a
                                                className="icon_scheduler icon_postpone"
                                                onClick={
                                                    this.handelClickNextDay
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={28}
                                                    height={28}
                                                    viewBox="0 0 28 28"
                                                    data-svgs-path="sm1/scheduler_postpone.svg"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        fillRule="nonzero"
                                                        d="M19.646 1.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L22.792 6H14a9.5 9.5 0 0 0-9.496 9.23l-.004.27A9.5 9.5 0 0 0 14 25a9.504 9.504 0 0 0 9.065-6.649.5.5 0 1 1 .954.3A10.504 10.504 0 0 1 14 26C8.201 26 3.5 21.299 3.5 15.5S8.201 5 14 5h8.792l-3.146-3.146a.5.5 0 0 1-.057-.638z"
                                                    />
                                                </svg>
                                            </a>

                                            <a
                                                className="icon_scheduler icon_next_week"
                                                onClick={
                                                    this.handelClickNextWeek
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={28}
                                                    height={28}
                                                    viewBox="0 0 28 28"
                                                    data-svgs-path="sm1/scheduler_next_week.svg"
                                                >
                                                    <g
                                                        fill="currentColor"
                                                        fillRule="nonzero"
                                                    >
                                                        <path
                                                            d="M6 3.5h16A2.5 2.5 0 0 1 24.5 6v2.5h-21V6A2.5 2.5 0 0 1 6 3.5z"
                                                            opacity=".1"
                                                        />
                                                        <path d="M22 3a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16zm0 1H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-3.109 12.188l.007.01-.004-.005-.003-.005zM21.5 8a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zM19 16.52a.504.504 0 0 1-.023.131l-.015.04a.494.494 0 0 1-.05.093l-.014.018a.503.503 0 0 1-.033.04l-3.511 3.512a.5.5 0 0 1-.765-.638l.057-.07L17.292 17H9.5a.5.5 0 0 1-.492-.41L9 16.5a.5.5 0 0 1 .41-.492L9.5 16h7.792l-2.646-2.646a.5.5 0 0 1 .638-.765l.07.057 3.511 3.513.017.019.009.01-.027-.03.03.035.029.04a.52.52 0 0 1 .066.162l.008.052v.007l-.002-.026.005.072v.02z" />
                                                    </g>
                                                </svg>
                                            </a>

                                            <a className="icon_scheduler icon_more">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    data-svgs-path="sm1/more.svg"
                                                >
                                                    <g
                                                        fill="none"
                                                        fillRule="evenodd"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        transform="translate(3 10)"
                                                    >
                                                        <circle
                                                            cx={2}
                                                            cy={2}
                                                            r={2}
                                                        />
                                                        <circle
                                                            cx={9}
                                                            cy={2}
                                                            r={2}
                                                        />
                                                        <circle
                                                            cx={16}
                                                            cy={2}
                                                            r={2}
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="no_hover">
                            <td>
                                <ul className="menu_buttons priorities">
                                    <li className="lbl">Priority</li>
                                    <li className="priorities">
                                        <a
                                            className="a_priority icon_priority_1"
                                            onClick={() => this.onClick(1)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                data-svgs-path="sm1/priority_1.svg"
                                            >
                                                <path
                                                    fill="#d1453b"
                                                    fillRule="nonzero"
                                                    d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777z"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            className="a_priority icon_priority_2"
                                            onClick={() => this.onClick(2)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                data-svgs-path="sm1/priority_2.svg"
                                            >
                                                <path
                                                    fill="#EB8909"
                                                    fillRule="nonzero"
                                                    d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777z"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            className="a_priority icon_priority_3"
                                            onClick={() => this.onClick(3)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                data-svgs-path="sm1/priority_3.svg"
                                            >
                                                <path
                                                    fill="#246fe0"
                                                    fillRule="nonzero"
                                                    d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777z"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            className="a_priority icon_priority_4"
                                            onClick={() => this.onClick(4)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                data-svgs-path="sm1/priority_4.svg"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    fillRule="nonzero"
                                                    d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777zm0-1.123C5.965 12.216 7.133 12 8.5 12c1.113 0 1.92.196 3.658.776 1.638.545 2.371.724 3.342.724 1.45 0 2.614-.262 3.5-.777V5.346c-.965.438-2.133.654-3.5.654-1.113 0-1.92-.196-3.658-.776C10.204 4.68 9.47 4.5 8.5 4.5c-1.45 0-2.614.262-3.5.777v7.377z"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="separator">
                                <div></div>
                            </td>
                        </tr>
                        <tr className="menu_item_reminders menu_item">
                            <td>
                                <div className="menu_wrapper">
                                    <span className="menu_icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            data-svgs-path="sm1/reminder.svg"
                                        >
                                            <path
                                                fill="currentColor"
                                                fillRule="nonzero"
                                                d="M6.355 17.438a7.5 7.5 0 1 1 11.29 0l1.709 1.708a.5.5 0 0 1-.708.708l-1.708-1.709A7.471 7.471 0 0 1 12 20c-1.891 0-3.619-.7-4.938-1.855l-1.708 1.709a.5.5 0 0 1-.708-.708l1.709-1.708zM12 19a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0-7h2.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5V8a.5.5 0 1 1 1 0v4zm4.604-6.896a.5.5 0 0 1-.708-.708l.336-.335a2.5 2.5 0 0 1 3.536 0l.671.671a2.5 2.5 0 0 1 0 3.536l-.335.336a.5.5 0 0 1-.708-.708l.336-.335a1.5 1.5 0 0 0 0-2.122l-.671-.671a1.5 1.5 0 0 0-2.122 0l-.335.336zM4.605 7.898a.5.5 0 0 1-.707.707l-.337-.337a2.5 2.5 0 0 1 0-3.536l.671-.671a2.5 2.5 0 0 1 3.536 0l.337.337a.5.5 0 0 1-.707.707l-.337-.337a1.5 1.5 0 0 0-2.122 0l-.671.671a1.5 1.5 0 0 0 0 2.122l.337.337z"
                                            />
                                        </svg>
                                    </span>
                                    <div className="menu_label">Reminders</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="separator">
                                <div></div>
                            </td>
                        </tr>

                        <tr className="menu_item_archive menu_item">
                            <td>
                                <div className="menu_wrapper">
                                    <span className="menu_icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            data-svgs-path="sm1/archive.svg"
                                        >
                                            <g fill="none" fillRule="evenodd">
                                                <path
                                                    stroke="currentColor"
                                                    d="M5.5 9.5V18A1.5 1.5 0 0 0 7 19.5h10a1.5 1.5 0 0 0 1.5-1.5V9.5h-13zm-1 0h15V7A1.5 1.5 0 0 0 18 5.5H6A1.5 1.5 0 0 0 4.5 7v2.5z"
                                                />
                                                <rect
                                                    width={6}
                                                    height={1}
                                                    x={9}
                                                    y={12}
                                                    fill="currentColor"
                                                    rx=".5"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                    <div className="menu_label">
                                        Archive task
                                    </div>
                                </div>
                            </td>
                        </tr>
                        {elmProject}
                        <tr className="menu_item_move_task menu_item">
                            <td>
                                <div className="menu_wrapper">
                                    <span className="menu_icon">
                                        <svg width={24} height={24}>
                                            <g
                                                fill="none"
                                                transform="translate(4 4)"
                                            >
                                                <circle
                                                    cx={8}
                                                    cy={8}
                                                    r="7.5"
                                                    stroke="currentColor"
                                                />
                                                <path
                                                    fill="currentColor"
                                                    d="M10.11 7.82L8.15 5.85a.5.5 0 1 1 .7-.7l2.83 2.82a.5.5 0 0 1 0 .71l-2.83 2.83a.5.5 0 1 1-.7-.7l1.98-1.99H4.5a.5.5 0 1 1 0-1h5.61z"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                    <div className="menu_label">
                                        Move to project
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr className="menu_item_duplicate menu_item">
                            <td>
                                <div className="menu_wrapper">
                                    <span className="menu_icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            data-svgs-path="sm1/add_integration.svg"
                                        >
                                            <g fill="none" fillRule="evenodd">
                                                <path
                                                    fill="currentColor"
                                                    d="M11 13h2.5c.3 0 .5.2.5.5s-.2.5-.5.5H11v2.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V14H7.5a.5.5 0 0 1-.5-.5c0-.3.2-.5.5-.5H10v-2.5c0-.3.2-.5.5-.5s.5.2.5.5V13z"
                                                />
                                                <rect
                                                    width={12}
                                                    height={12}
                                                    x="4.5"
                                                    y="7.5"
                                                    stroke="currentColor"
                                                    rx={2}
                                                />
                                                <path
                                                    fill="currentColor"
                                                    fillRule="nonzero"
                                                    d="M19 16.7V6a1 1 0 0 0-1-1H7.3c.2-.3.4-.6.7-.7.3-.2.7-.3 1.6-.3h7.8c1 0 1.3 0 1.6.3.3.1.6.4.7.7.2.3.3.7.3 1.6v7.8c0 1 0 1.3-.3 1.6-.1.3-.4.5-.7.7zm-1.6.3H9.6h7.8z"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                    <div className="menu_label">Duplicate</div>
                                </div>
                            </td>
                        </tr>

                        <tr className="menu_item_link menu_item">
                            <td>
                                <div className="menu_wrapper">
                                    <span className="menu_icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            data-svgs-path="sm1/link.svg"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M7.39 12.339l.706.707-1.768 1.768a2 2 0 1 0 2.829 2.828l3.535-3.535a2 2 0 0 0 0-2.829l.707-.707a3 3 0 0 1 0 4.243l-3.535 3.535a3 3 0 0 1-4.243-4.242l1.768-1.768zm8.838-.354l-.707-.707 1.768-1.768a2 2 0 1 0-2.829-2.828l-3.535 3.536a2 2 0 0 0 0 2.828l-.707.707a3 3 0 0 1 0-4.243l3.535-3.535a3 3 0 0 1 4.243 4.243l-1.768 1.767z"
                                            />
                                        </svg>
                                    </span>
                                    <div className="menu_label">
                                        Copy link to task
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="separator">
                                <div></div>
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
                                    <div
                                        className="menu_label"
                                        onClick={this.onDelete}
                                    >
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

// const mapStateToProps = state => {
//   return {
//     tasks: state.tasks,
//   };
// };

const mapDispatchToProps = {
    onDelete: actions.deleteTask,
    onEditTask: actions.updateTask,
    onUpdate: actions.updateTask,
    onCloseForm: actions.closeForm,
    onGetValue: actions.getValue,
};
export default connect(null, mapDispatchToProps)(PopupEdit);
