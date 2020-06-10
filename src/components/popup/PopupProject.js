//libraries
import React, { Component } from "react";
import * as actions from "../../actions/index";
import { connect } from "react-redux";

class PopupProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            project: "Inbox",
            isNotFind: true,
            idProject: "",
        };
    }

    onChange = e => {
        e.stopPropagation();
        let { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    };

    onAddProject = () => {
        // this.props.onAddProject(this.state);

        this.setState(
            {
                project: this.state.name,
            },
            () => {
                this.props.onAddProject(this.state);
                this.props.onGetNameProject(this.state.project);
                this.props.onClosePopup();
            }
        );
    };

    // {project === 2 ? elm_checker : ""}

    onClick = (name, id) => {
        this.setState(
            {
                project: name,
                idProject: id,
            },
            () => {
                this.props.onGetNameProject(
                    this.state.project,
                    this.state.idProject
                );
                this.props.onClosePopup();
            }
        );
    };

    render() {
        let { isNotFind, name } = this.state;
        let { projects } = this.props;
        console.log(this.props.project);
        let compare = name.length;

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

        let elmProjects = projects.map((project, index) => {
            if (project.name.toLowerCase().indexOf(name.toLowerCase()) !== -1) {
                isNotFind = false;
                return (
                    <li className="option_project" key={index}>
                        <div
                            className="project_pick_item"
                            onClick={() =>
                                this.onClick(project.name, project.id)
                            }
                        >
                            <span
                                className="project_item_icon"
                                style={{ color: `${project.color}` }}
                            ></span>
                            <span className="project_item_name">
                                {project.name}
                            </span>
                            {this.props.project === project.name && elm_checker}
                        </div>
                    </li>
                );
            }
        });

        return (
            <div>
                <div className="dialog_nose" style={{ left: "100px" }}></div>
                <div className="dropdown_set_project">
                    <div className="dropdown_select_input">
                        <input
                            type="text"
                            placeholder="Type a project"
                            autoComplete="off"
                            spellCheck="false"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    </div>
                    {isNotFind && compare !== 0 ? (
                        <div className="project_picker_emty">
                            <span> Project not found</span>
                            <div>
                                <button
                                    type="button"
                                    onClick={this.onAddProject}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="nonzero"
                                            d="M12.5 6a.5.5 0 0 1 .5.5V12h5.5a.5.5 0 1 1 0 1H13v5.5a.5.5 0 1 1-1 0V13H6.5a.5.5 0 1 1 0-1H12V6.5a.5.5 0 0 1 .5-.5z"
                                        ></path>
                                    </svg>
                                    Create "{this.state.name}"
                                </button>
                            </div>
                        </div>
                    ) : (
                        <ul>{elmProjects}</ul>
                    )}
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

export default connect(mapStateToProps, mapDispatchToProps)(PopupProject);
