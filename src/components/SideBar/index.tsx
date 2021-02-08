import React from "react";
import "./SideBar.scss";
import DashBoardLogo from "../../assets/dashboard.png";
import ShoppingListLogo from "../../assets/shopping-list.png";
import Customer from "../../assets/customer.png";

const SideBar = () => {
    return (
        <div className='main'>
            <div className='sidebar-container'>
                <div className='sidebar-logo'>
                    <img src={DashBoardLogo} alt='dashboard' className='logo' />
                </div>
                <div className='sidebar-logo'>
                    <img
                        src={ShoppingListLogo}
                        alt='Shopping List'
                        className='logo'
                    />
                </div>
                <div className='sidebar-logo'>
                    <img src={Customer} alt='Customer' className='logo' />
                </div>
            </div>
        </div>
    );
};

export default SideBar;
