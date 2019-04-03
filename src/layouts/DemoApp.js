import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SidebarV1 from '../components/sidebars/SidebarV1';
import Home from '../views/Home';
import NavbarV1 from '../components/navbars/NavbarV1'

class DemoApp extends React.Component {
     
    render() {
        return(
            <div className="wrapper" >
                <NavbarV1/>
                <SidebarV1/>
                <Switch>
                    <Route path="/demo/home" component={Home}/>
                </Switch>
            </div>
        );
    }

}

export default DemoApp;