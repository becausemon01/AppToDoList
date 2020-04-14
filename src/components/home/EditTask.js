import React,{Componet} from 'react';

class EditTask extends Componet{
    render() {
        return(
            <div>
                <div className="display">
                    <div className="modal_edit_task">
                    <form className="modal_content">
                        <div className="item_detail_header">
                        <button type="button" className="item_detail_paren_info">
                            <div className="item_detail_paren_icon">
                            <svg width={24} height={24} viewBox="0 0 24 24">
                                <g fill="currentColor" fillRule="evenodd">
                                <path fillRule="nonzero" d="M10 14.5a2 2 0 1 0 4 0h5.5V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18v-3.5H10z" opacity=".1">
                                </path>
                                <path fillRule="nonzero" d="M8.062 4h7.876a2 2 0 0 1 1.94 1.515l2.062 8.246a2 2 0 0 1 .06.485V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.754a2 2 0 0 1 .06-.485L6.12 5.515A2 2 0 0 1 8.061 4zm0 1a1 1 0 0 0-.97.757L5.03 14.004a1 1 0 0 0-.03.242V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.754a1 1 0 0 0-.03-.242L16.91 5.757a1 1 0 0 0-.97-.757H8.061zM12 17.25A2.75 2.75 0 0 1 9.295 15H7a.5.5 0 1 1 0-1h2.75a.5.5 0 0 1 .5.5 1.75 1.75 0 0 0 3.5 0 .5.5 0 0 1 .5-.5H17a.5.5 0 1 1 0 1h-2.295A2.75 2.75 0 0 1 12 17.25z">     
                                </path>
                                </g>
                            </svg>
                            </div>
                            <span className="item_content">
                            Inbox
                            <small className="item_counter" />
                            </span>
                        </button>
                        <button type="button" className="item_detail_close">
                            <svg viewBox="0 0 24 24" className="icon_close" width={24} height={24}>
                            <path fill="currentColor" fillRule="nonzero" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z">
                            </path>
                            </svg>
                        </button>
                        </div>
                        <div className="item_overview">
                        <button type="button" className="item_checkbox">
                            <svg width={24} height={24}>
                            <path fill="currentColor" d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z">
                            </path>
                            </svg>
                        </button>
                        <div className="item_overview_main">
                            <div role="button" className="item_overview_content">
                            <div className="task_content">
                                <span>
                                abc
                                </span>
                            </div>
                            </div>
                            <div className="item_overview_sub">
                            <button type="button" className="item_due_selector">
                                <span className="item_due_btn">
                                <div className="calendar_icon">
                                    <svg data-svgs-path="sm1/calendar_small.svg" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                                    <path fill="currentColor" fillRule="nonzero" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z">
                                    </path>
                                    </svg>
                                </div>
                                <span className="date_today">Today</span>
                                </span>
                            </button>
                            </div>
                            <div className="item_overview_footer">
                            <div className="iteam_actions">
                                <button type="button" className="iteam_action" id="dropdow_select_1" aria-owns="dropdow_select_1_popup" aria-expanded="false" aria-haspopup="listbox" aria-label="select 1 project">
                                <span className="tooltip_warper">
                                    <span>
                                    <svg data-svgs-path="sm1/project.svg" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                        <path fill="currentColor" fillrule="nonzero" d="M10.5 17h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zm0-6h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zm0-6h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zM5.75 18.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm0-6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm0-6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z">
                                        </path>
                                    </svg>
                                    </span>
                                </span>
                                </button>
                                <button type="button" className="iteam_action" id="dropdow_select_2" aria-owns="dropdow_select_2_popup" aria-expanded="false" aria-haspopup="listbox" aria-label="Add label">
                                <span className="tooltip_warper">
                                    <span>
                                    <svg data-svgs-path="sm1/label_outline.svg" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                        <path fill="currentColor" fillrule="nonzero" d="M3.914 11.086l6.5-6.5A2 2 0 0 1 11.828 4H18a2 2 0 0 1 2 2v6.172a2 2 0 0 1-.586 1.414l-6.5 6.5a2 2 0 0 1-2.828 0l-6.172-6.172a2 2 0 0 1 0-2.828zm.707.707a1 1 0 0 0 0 1.414l6.172 6.172a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 0 0 .293-.707V6a1 1 0 0 0-1-1h-6.172a1 1 0 0 0-.707.293l-6.5 6.5zM14.75 10.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z">
                                        </path>
                                    </svg>
                                    </span>
                                </span>
                                </button>
                                <button type="button" className="iteam_action" id="dropdow_select_3" aria-owns="dropdow_select_3_popup" aria-expanded="false" aria-haspopup="listbox" aria-label="Set the piority">
                                <span className="tooltip_warper">
                                    <span>
                                    <svg data-svgs-path="sm1/priority_flag.svg" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                        <path fill="currentColor" fillrule="nonzero" d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777zm0-1.123C5.965 12.216 7.133 12 8.5 12c1.113 0 1.92.196 3.658.776 1.638.545 2.371.724 3.342.724 1.45 0 2.614-.262 3.5-.777V5.346c-.965.438-2.133.654-3.5.654-1.113 0-1.92-.196-3.658-.776C10.204 4.68 9.47 4.5 8.5 4.5c-1.45 0-2.614.262-3.5.777v7.377z">
                                        </path>
                                    </svg> 
                                    </span>
                                </span>
                                </button>
                                <button type="button" className="iteam_action" aria-label="Add reminder">
                                <span className="tooltip_warper">
                                    <span>
                                    <svg data-svgs-path="sm1/reminder.svg" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                        <path fill="currentColor" fillrule="nonzero" d="M6.355 17.438a7.5 7.5 0 1 1 11.29 0l1.709 1.708a.5.5 0 0 1-.708.708l-1.708-1.709A7.471 7.471 0 0 1 12 20c-1.891 0-3.619-.7-4.938-1.855l-1.708 1.709a.5.5 0 0 1-.708-.708l1.709-1.708zM12 19a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0-7h2.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5V8a.5.5 0 1 1 1 0v4zm4.604-6.896a.5.5 0 0 1-.708-.708l.336-.335a2.5 2.5 0 0 1 3.536 0l.671.671a2.5 2.5 0 0 1 0 3.536l-.335.336a.5.5 0 0 1-.708-.708l.336-.335a1.5 1.5 0 0 0 0-2.122l-.671-.671a1.5 1.5 0 0 0-2.122 0l-.335.336zM4.605 7.898a.5.5 0 0 1-.707.707l-.337-.337a2.5 2.5 0 0 1 0-3.536l.671-.671a2.5 2.5 0 0 1 3.536 0l.337.337a.5.5 0 0 1-.707.707l-.337-.337a1.5 1.5 0 0 0-2.122 0l-.671.671a1.5 1.5 0 0 0 0 2.122l.337.337z">
                                        </path>
                                    </svg> 
                                    </span>
                                </span>
                                </button>
                                <button type="button" className="iteam_action" aria-label="Add reminder">
                                <span className="tooltip_warper">
                                    <span>
                                    <svg width={24} height={6}>
                                        <path d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fillRule="evenodd" /></svg>
                                    </span>
                                </span>
                                </button>    
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tabs">
                        <div role="tablist">
                            <button className="reactist" role="tab" id="tab_subtasks">SubTasks</button>
                            <button className="reactist" role="tab" id="tab_comment">Comments</button>
                            <button className="reactist" role="tab" id="tab_activity">Activity</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>

        )
    }
};

export default EditTask;