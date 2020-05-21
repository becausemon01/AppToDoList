//libraries
import React, { Component } from "react";
import * as actions from "../../actions/index";
import { connect } from "react-redux";

class PopupAddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            color: "rgb(128, 128, 128",
            nameColor: "Charcoal",
            is_favorite: false,
            isOpenListColor: true,
            listColors: [
                {
                    color: "red",
                    name: "red",
                },
                {
                    color: "blue",
                    name: "blue",
                },
                {
                    color: "rgb(255, 153, 51)",
                    name: "orange",
                },
                {
                    color: "green",
                    name: "Green",
                },
                {
                    color: "rgb(128, 128, 128)",
                    name: "Charcoal",
                },
            ],
        };
    }

    onChange = e => {
        let { value } = e.target;

        this.setState({
            name: value,
        });
    };

    onSubmit = () => {
        if (this.state.name.length !== 0) {
            this.props.onAddProject(this.state);
            this.onClose();
        }
    };

    onClose = () => {
        this.setState(
            {
                name: "",
            },
            () => {
                this.props.onClose();
            }
        );
    };

    onCheckbox = () => {
        this.setState(
            {
                is_favorite: !this.state.is_favorite,
            },
            () => {
                console.log(this.state.is_favorite);
            }
        );
    };

    onShowListColor = () => {
        this.setState({
            isOpenListColor: !this.state.isOpenListColor,
        });
    };

    onGetColor = (color, nameColor) => {
        this.setState({
            color,
            nameColor,
            isOpenListColor: true,
        });
    };

    render() {
        let { is_favorite, listColors, color, nameColor } = this.state;
        const checked = {
            backgroundColor: is_favorite && "#dd4b39",
        };
        const checked1 = {
            left: is_favorite && "25px",
        };

        const elmChecker = (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                width="12"
                height="12"
                className="color_dropdown_select__checkmark"
            >
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z"
                ></path>
            </svg>
        );

        const elmListColors = listColors.map((item, index) => {
            return (
                <li
                    key={index}
                    onClick={() => {
                        this.onGetColor(item.color, item.name);
                    }}
                >
                    <span
                        className="color_dropdown_select_color"
                        style={{ backgroundColor: `${item.color}` }}
                    ></span>
                    <span className="color_dropdown_select_name">
                        {item.name}
                    </span>
                    {item.name === nameColor && elmChecker}
                </li>
            );
        });

        return (
            <div className="dialog_overlay">
                <div className="modal_box_create_project">
                    <form onSubmit={this.onSubmit}>
                        <header className="modal_box_header">
                            <hgroup>
                                <h1>Add project</h1>
                            </hgroup>
                            <div className="modal_box_header_button">
                                <svg width="24" height="24">
                                    <g fill="none" fillRule="evenodd">
                                        <path
                                            fill="currentColor"
                                            d="M11.9 16.5c-.46 0-.8-.35-.8-.85s.34-.86.8-.86c.48 0 .8.36.8.86s-.32.85-.8.85zM9.5 9.87c.06-1.32.9-2.37 2.54-2.37 1.46 0 2.46.95 2.46 2.21 0 .96-.47 1.64-1.22 2.11-.73.46-.94.8-.94 1.45v.4h-1.02v-.57c0-.8.37-1.36 1.16-1.86.68-.43.94-.82.94-1.47 0-.76-.56-1.32-1.43-1.32-.87 0-1.43.55-1.5 1.42H9.5z"
                                        ></path>
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="7.5"
                                            stroke="currentColor"
                                        ></circle>
                                    </g>
                                </svg>
                            </div>
                        </header>
                        <section className="modal_box_body">
                            <div className="form_field">
                                <label htmlFor="edit_project_modal_field_name">
                                    Project name
                                </label>
                                <input
                                    type="text text_box"
                                    onChange={this.onChange}
                                    id="edit_project_modal_field_name"
                                    spellCheck="false"
                                    autoComplete="off"
                                    name="name"
                                    value={this.state.value}
                                    className="form_field_control"
                                ></input>
                            </div>
                            <div className="form_field">
                                <label id="edit_project_modal_field_color_label">
                                    Project color
                                </label>
                                {this.state.isOpenListColor ? (
                                    <button
                                        onClick={this.onShowListColor}
                                        type="button"
                                        className="color_dropdown_toggle form_field_control"
                                    >
                                        <span
                                            className="color_dropdown_select_color"
                                            style={{
                                                backgroundColor: `${color}`,
                                            }}
                                        ></span>
                                        <span className="color_dropdown_select_name">
                                            {nameColor}
                                        </span>
                                    </button>
                                ) : (
                                    <div className="dialog_content_color">
                                        <div className="color_dropdown_select">
                                            <ul>{elmListColors}</ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="form_field form_field_inline">
                                <label>
                                    <div
                                        className="reactist_switch"
                                        style={checked}
                                    >
                                        <input
                                            onChange={this.onCheckbox}
                                            type="checkbox"
                                            name="is_favorite"
                                            value={this.state.is_favorite}
                                        ></input>
                                        <span
                                            className="reactist_switch_handle"
                                            style={checked1}
                                        ></span>
                                    </div>
                                    Add to favorites
                                </label>
                            </div>
                        </section>
                        <footer className="modal_box_actions">
                            <button
                                type="button"
                                className="ist_button"
                                onClick={this.onClose}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={!this.state.name}
                                className="ist_button ist_button_red"
                            >
                                Add
                            </button>
                        </footer>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects,
    };
};

const mapDispatchToProps = {
    onAddProject: actions.addProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupAddProject);
