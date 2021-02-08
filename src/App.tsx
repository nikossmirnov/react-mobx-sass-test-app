import React from "react";
import "./App.scss";

import SideBar from "./components/SideBar";
import MainPage from "./components/MainPage";
import Header from "./components/Header";

function App() {
    return (
        <div className='App'>
            <SideBar />
            <div className='page-content'>
                <Header />
                <MainPage />
            </div>
        </div>
    );
}

export default App;
