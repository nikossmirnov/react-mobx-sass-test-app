import React from "react";
import img from "../../assets/image.png";
import imgScnd from "../../assets/imageScnd.png";
import "./MainPage.scss";
import playBtn from "../../assets/playBtn.png";
import { CategoryState } from "../../store/index";
import { observer } from "mobx-react-lite";

const MainPage = observer(() => {
    return (
        <div className='wrapper'>
            {CategoryState.state === "Popular" ? (
                <>
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
                            <img
                                src={playBtn}
                                alt='play button'
                                className='image'
                            />
                        </div>
                    </div>
                    <div className='img-container'>
                        <img src={imgScnd} alt='imgFirst' className='image' />
                        <div className='top-left'>
                            <div className='text'>Graphic design</div>
                            <div className='paragraph'>30 lessons</div>
                        </div>
                        <div className='top-right'>
                            <div className='text'>236 min</div>
                        </div>
                        <div className='bottom-left'>
                            <img
                                src={playBtn}
                                alt='play button'
                                className='image'
                            />
                        </div>
                    </div>
                </>
            ) : (
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
                        <img
                            src={playBtn}
                            alt='play button'
                            className='image'
                        />
                    </div>
                </div>
            )}
        </div>
    );
});

export default MainPage;
