import { Outlet, Link } from "react-router-dom";

import MainSidebar from "../mainSidebar/MainSidebar";
import Footer from "../footer/Footer";

import home from '../accountLayout/img/home.svg';

import './mainPageLayout.scss';

const MainPageLayout = () => {


    return (
      <div className="main">
        <MainSidebar />
        <main>
          <Outlet/>
        </main>
        <Footer/>

        <Link to='/' className="home-btn">
          <img src={home} alt="home" />
        </Link>
      </div>
    )
}

export default MainPageLayout;