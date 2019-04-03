import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class SidebarV1 extends React.Component {
    render() {
        return(
           <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="logo">
                <i class="far fa-laugh-squint"></i> SideBrand
                </div>
                <hr/>

                    <Nav>
                        <li>
                        <NavLink>
                            Home
                        </NavLink>
                        </li> 

                        <li>
                        <NavLink>
                            DashBoard
                        </NavLink>
                        </li>

                        <li>
                        <NavLink>
                            Video
                        </NavLink>
                        </li>

                    </Nav>

            </div>
            </div>

        );
    }
}

export default SidebarV1;