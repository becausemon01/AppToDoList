import React, { Component } from "react";
import TopBar from "./TopBar";
import LeftMenu from "./LeftMenu";
import Main from "./Main";

class Home extends Component {
    render() {
        return (
            <div id="todoist_app">
                <div id="page_background">
                    <TopBar />
                    <div id="app_holder">
                        <div id="content_app">
                            <LeftMenu />
                            <Main />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
