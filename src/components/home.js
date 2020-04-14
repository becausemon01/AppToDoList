import React, {Component} from 'react';
import TopBar from './home/TopBar';
import LeftMenu from './home/LeftMenu';
import Main from './home/Main' ;

class Home extends Component{
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