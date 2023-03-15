import { useState, useEffect } from "react";

import SlideCarousel from "../slideCarousel/SlideCarousel";
import close from '../pages/main/singleProjectPage/img/close.png';

const FloorSetup = ({data, order}) => {
    const [isZoomedSetup, setIsZoomedSetup] = useState(false);

    const toggleZoomedSetup = () => {
        setIsZoomedSetup(!isZoomedSetup);
    };

    useEffect(() => {
        document.body.style.overflow = isZoomedSetup  ? "hidden" : "visible";
    }, [isZoomedSetup]);

    const setupSliderOptions = {
        preview: true,
        arrows: true,
        dots: false,
        objectFit: 'contain',
        zooming: false,
        arrowColor: false
    };

    return (
        <>
            <div className='project__setup-list-single'>
                <img src={data.preview} alt={`setup-`} onClick={() => toggleZoomedSetup()}/>
                <p>{data.name}</p>
            </div>

            <div className='project__setup-popup' style={{display: isZoomedSetup? 'block' : 'none'}}>
                <div className='project__setup-popup-content'>
                    <div name='slider' key={order}>
                        <SlideCarousel slides={data.slides} options={setupSliderOptions}/>
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
                </div>
                <div className='project__setup-popup-close' onClick={toggleZoomedSetup}>
                    <img src={close} alt="close" />
                </div>
            </div>
        </>
        
    )
}

export default FloorSetup;