import React from "react";
import { CategoryState } from "../../store/index";
import { observer } from "mobx-react-lite";

import img from "../../assets/image.png";
import imgScnd from "../../assets/imageScnd.png";
import "./MainPage.scss";
import Block from "./block";

const MainPage = observer(() => {
    return (
        <div className='wrapper'>
            {CategoryState.state === "Popular" ? (
                <div>
                    <Block img={img} />
                    <Block img={imgScnd} />
                </div>
            ) : (
                <Block img={img} />
            )}
        </div>
    );
});

export default MainPage;
