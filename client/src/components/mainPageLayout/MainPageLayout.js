import { useState, useEffect } from "react";
import { Outlet, useResolvedPath } from "react-router-dom";

import MainSidebar from "../mainSidebar/MainSidebar";
import Footer from "../footer/Footer";
import CustomLink from '../../utilis/CustomLink';
import Spinner from '../spinner/Spinner';

import home from '../accountLayout/img/home.svg';

import './mainPageLayout.scss';

const MainPageLayout = () => {
    const [isUploading, setIsUploading] = useState(false);

    const { pathname } = useResolvedPath();

    useEffect(() => {
        if (pathname === '/') {
            setIsUploading(true);

            setTimeout(() => {
                setIsUploading(false);
            }, 2000); 
        }
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isUploading? "hidden" : "visible";
    }, [isUploading]);

    return (
        <div className="main">
            <MainSidebar />
            <main>
                <Outlet />
            </main>
            <Footer/>

            <div className={`preloader ${isUploading ? 'active' : ''}`}>
                <Spinner/>
            </div>

            <CustomLink to='/' className="home-btn">
                <img src={home} alt="home" />
            </CustomLink>
        </div>
    )
}

export default MainPageLayout;