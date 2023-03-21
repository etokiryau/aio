import { Outlet } from "react-router-dom";

import MainSidebar from "../mainSidebar/MainSidebar";
import Footer from "../footer/Footer";
import CustomLink from '../../utilis/CustomLink';

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

      <CustomLink to='/' className="home-btn">
        <img src={home} alt="home" />
      </CustomLink>
    </div>
  )
}

export default MainPageLayout;