import { Outlet, Link } from "react-router-dom";

import AccountSidebar from "../accountSidebar/AccountSidebar";
import home from './img/home.svg';

import './accountLayout.scss';

function AcountLayout() {
    return (
        <div className="account">
            <AccountSidebar/>
            <main>
                <Outlet/>
            </main>

            <Link to='/' className="home">
                <img src={home} alt="home" />
            </Link>
        </div>
    )
}

export default AcountLayout;