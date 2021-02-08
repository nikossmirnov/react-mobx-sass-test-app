import React from "react";
import "./Header.scss";
import { CategoryState } from "../../store/index";

const Header = () => {
    return (
        <div className='Header'>
            <div className='title'>Courses</div>
            <ul className='nav'>
                <li
                    className='category'
                    onClick={() => CategoryState.categoryToPopular()}
                >
                    <a>Popular</a>
                </li>
                <li
                    className='category'
                    onClick={() => CategoryState.categoryToFavorite()}
                >
                    <a>Favorite</a>
                </li>
                <li
                    className='category'
                    onClick={() => CategoryState.categoryToNew()}
                >
                    <a>New</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
