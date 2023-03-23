import { useState, useEffect } from "react";

import SlideCarousel from "../slideCarousel/SlideCarousel";
import close from '../pages/main/singleProjectPage/img/close.png';

const FloorSetup = ({data, order}) => {
    const [isZoomedSetup, setIsZoomedSetup] = useState(false);
    const [isZoomedSlide, setIsZoomedSlide] = useState(false);

    const toggleZoomedSetup = () => {
        setIsZoomedSetup(!isZoomedSetup);
    };

    useEffect(() => {
        document.body.style.overflow = isZoomedSetup  ? "hidden" : "visible";
    }, [isZoomedSetup]);

    const sliderOptions = {
        preview: true,
        arrows: true,
        dots: false,
        objectFit: 'contain',
        arrowColor: false
    };

    const containerStyle = {
        padding: isZoomedSlide ? '0' : '55px 80px'
    };

    const closeStyle={
        display: isZoomedSlide ? 'none' : ''
    }

    return (
        <>
            <div className='project__setup-list-single'>
                <img src={data.preview} alt={`setup-`} onTouchStart={toggleZoomedSetup} onClick={toggleZoomedSetup}/>
                <p>{data.name}</p>
            </div>

            <div className={`project__setup-popup ${isZoomedSetup? 'active' : ''} ${isZoomedSlide? 'zoom-slide' : ''}`}>
                <div className='project__setup-popup-content'>
                    <div name='slider' key={order}>
                        <SlideCarousel slides={data.slides} options={sliderOptions} setIsZoomedSlide={setIsZoomedSlide} isZoomedSetup={isZoomedSetup}/>
                    </div>
                    
                    <div name='setup'>
                        <p>FLOOR COMPOSITION OF SPACES</p>
                        <div>
                            <ul>
                                {data.spaces.map((item, i) => {
                                    return <li key={i}>{item}</li>
                                })}
                            </ul>
                        </div>
                        
                    </div>
                    <div className='project__setup-popup-close' style={closeStyle} onClick={toggleZoomedSetup}>
                        <img src={close} alt="close" />
                    </div>
                </div>
                
            </div>
        </>
        
    )
}

export default FloorSetup;