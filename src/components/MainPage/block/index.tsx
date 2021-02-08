import React from "react";
import playBtn from "../../../assets/playBtn.png";

const index = ({ img }: any) => {
    return (
        <div className='img-container'>
            <img src={img} alt='imgFirst' className='image' />
            <div className='top-left'>
                <div className='text'>Illustration</div>
                <div className='paragraph'>24 lessons</div>
            </div>
            <div className='top-right'>
                <div className='text'>134 min</div>
            </div>
            <div className='bottom-left'>
                <img src={playBtn} alt='play button' className='image' />
            </div>
        </div>
    );
};

export default index;
