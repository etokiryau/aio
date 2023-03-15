import { useNavigate } from "react-router-dom";

import Map from "../../map/Map";
import MainSidebar from "../../mainSidebar/MainSidebar";

import home from '../../accountLayout/img/home.svg';

import './mapPage.scss';

const MapPage = () => {

    const navigate = useNavigate();

    const backToMain = () => {
        navigate(-1);
    }
   
    return (
        <>
            <div onClick={backToMain} className="home-btn">
                <img src={home} alt="home" />
            </div>
            <MainSidebar />
            <Map/>
        </>
    )
}

export default MapPage;