import { AccountBoxOutlined, AccountCircle, AllInboxOutlined, BorderColorOutlined, BugReportSharp, CloudUploadOutlined, ColorLens, Dashboard, EqualizerOutlined, ExitToAppOutlined, NotificationAddOutlined, PsychologyAltOutlined, SettingsApplications, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import "./ASideBar.scss"
import { Link } from 'react-router-dom'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const ASideBar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Admin panel</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" className='link'> <li><Dashboard className='icon' /><span>dashboard</span></li>
                    </Link>

                    <Link to="/users" className='link'><li><AccountCircle className='icon' /><span>Recipients</span></li>
                    </Link>

                    <Link to="/product" className='link'>
                        <li><LibraryAddIcon className='icon' /><span>Add vaccine Centers</span></li>
                    </Link>
                    <Link to="/product" className='link'>
                        <li><VaccinesIcon className='icon' /><span>vaccine Centers</span></li>
                    </Link>
                    <p className="title">USEFUL</p>
                    <li><EqualizerOutlined className='icon' /><span>Stats</span></li>
                    <li><NotificationAddOutlined className='icon' /><span>Notification</span></li>
                    <p className="title">SERVICE</p>

                    <li><CloudUploadOutlined className='icon' /><span>System Health</span></li>
                    <li><PsychologyAltOutlined className='icon' /><span>Logs</span></li>
                    <li><SettingsApplications className='icon' /><span>Setting</span></li>
                    <p className="title">USER</p>

                    <li><AccountBoxOutlined className='icon' /><span>Profile</span></li>
                    <li><ExitToAppOutlined className='icon' /><span>Logout</span></li>
                </ul>
            </div>
            <hr />
            <div className="bottom">
                <div className="option">
                    <div className='backgroundTitle'><ColorLens className='icon' /><span>Background</span>:</div>
                    <div className="optionItem"></div>
                    <div className="optionItem"></div>
                </div>
            </div>

        </div>
    )
}

export default ASideBar
