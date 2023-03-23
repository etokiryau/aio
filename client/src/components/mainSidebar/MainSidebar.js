import { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';

import CustomNavLink from '../../utilis/CustomNavLink';
import { AuthContext } from '../../context/AuthContext';
import MediaStub from "../mediaStub/MediaStub";

import instagramLogo from '../footer/img/instagramLogo.png';
import facebookLogo from '../footer/img/facebookLogo.png';
import linkedinLogo from '../footer/img/linkedinLogo.png';

import './mainSidebar.scss';

const MainSidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        document.body.style.overflow = isSidebarOpen ? "hidden" : "visible";
    }, [isSidebarOpen]);


    const { isAuthenticated } = useContext(AuthContext);
    const pathname = isAuthenticated ? '/project' : '/login';

    return (
        <aside id="main">
            <div onClick={toggleSidebar}  className={`aside__burger-wrapper ${isSidebarOpen ? " active" : ""}`}>
                <div className={`aside__burger ${isSidebarOpen ? " active" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
            <div onClick={toggleSidebar} style={{display: isSidebarOpen ? '' : 'none'}} className="aside__wrapper"/>

            <div className="aside__content" style={{top: isSidebarOpen ? '0px' : '-250%'}}>
                <ul >
                    <li onClick={toggleSidebar}><CustomNavLink to='/'>Home</CustomNavLink></li>
                    <li onClick={toggleSidebar}><CustomNavLink to='/projects'>Projects</CustomNavLink></li>
                    <li onClick={toggleSidebar}><CustomNavLink to='/advantages'>Advantages</CustomNavLink></li>
                    <li onClick={toggleSidebar}><CustomNavLink to='/services'>Services</CustomNavLink></li>
                    <li onClick={toggleSidebar}><CustomNavLink to='/questions'>FAQ</CustomNavLink></li>
                    <li onClick={toggleSidebar}><CustomNavLink to='/career'>Career</CustomNavLink></li>
                    <li onClick={toggleSidebar}><CustomNavLink to='/contacts'>Contacts</CustomNavLink></li>
                </ul>

                <div className="aside__content-beneath">
                    <div className="aside__content-beneath-media">
                        <MediaStub src={instagramLogo} alt={"instagram"}/>
                        <MediaStub src={facebookLogo} alt={"facebook"}/>
                        <MediaStub src={linkedinLogo} alt={"linkedin"}/>
                        {/* <a href=""><img src={instagramLogo} alt="instagram" /></a>
                        <a href=""><img src={facebookLogo} alt="facebook" /></a>
                        <a href=""><img src={linkedinLogo} alt="linkedin" /></a> */}
                    </div>
                    <Link to={pathname}>Login</Link>
                    <p>En</p>
                </div>
            </div>
        </aside>
    )
}

export default MainSidebar;