import { NavLink, Link } from 'react-router-dom';

import project from './img/project.png';
import documentation from './img/documentation.png';
import building from './img/building.png';
import smartHouse from './img/smartHouse.png';
import support from './img/support.png';
import suportAbs from './img/supportAbs.svg';

import './accountSidebar.scss';

const AccountSidebar = () => {
    const setActiveStyle = ({isActive}) => ({color: isActive ? '#98fa84' : 'inherit'});

    return (
        <>
            <aside id="account">
                <ul>
                    <li>
                        <NavLink end="true" style={setActiveStyle} to={`/project`}>
                            <img src={project} alt="project" />
                            Project
                        </NavLink></li>
                    <li>
                        <NavLink end="true" style={setActiveStyle} to={`/documentation`}>
                            <img src={documentation} alt="documentation" />
                            Documentation
                        </NavLink></li>
                    <li>
                        <NavLink end="true" style={setActiveStyle} to={`/building`}>
                            <img src={building} alt="building" />
                            Building
                        </NavLink></li>
                    <li>
                        <NavLink end="true" style={setActiveStyle} to={`/smarthouse`}>
                            <img src={smartHouse} alt="smartHouse" />
                            Smart house
                        </NavLink></li>
                    <li className="support">
                        <NavLink end="true" style={setActiveStyle} to={`/support`}>
                            <img src={support} alt="support" />
                            Support
                        </NavLink></li>
                </ul>
            </aside>

            <Link end="true" to={`/support`} className="support-btn">
                <img src={suportAbs} alt="support-button" />
            </Link>
        </>
    )
}

export default AccountSidebar
;