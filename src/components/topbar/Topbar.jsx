import React from 'react';
import './topbar.css';
import {NotificationsNone} from '@material-ui/icons'

function Topbar() {

    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Kezdesu</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default Topbar;