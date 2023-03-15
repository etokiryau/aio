import { useState, useEffect } from "react";

import zoomIn from './img/zoomIn.png';
import zoomOut from './img/zoomOut.png';
import close from './img/close.png';

import './slideCarousel.scss';

const SlideCarousel = ({slides, options: { preview = false, arrows, dots, appearence = 'single', objectFit = 'cover', zooming = true, arrowColor = true}}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isZoomedView, setIsZoomedView] = useState(false);

    const slidesNumber = slides.length;

    const toggleZoomedView = () => {
        setIsZoomedView(!isZoomedView);
    };

    useEffect(() => {
        document.body.style.overflow = isZoomedView ? "hidden" : "visible";
    }, [isZoomedView]);

    const dotsStyle = {display: dots && appearence === 'single' && slidesNumber > 1 ? '' : 'none'};
    const arrowStyle = {
        display: arrows && appearence === 'single' && slidesNumber > 1 ? '' : 'none',
        backgroundColor: arrowColor ? '#ffffff' : '#3D3D3D',
    };
    const arrowSpanStyle = {backgroundColor: arrowColor ? '#000000' : '#ffffff',}
    const currentStyle = {
        display: appearence === 'single' ? 'block' : 'flex',
        height: appearence === 'single' ? '100%' : 'auto',
    };
    const imageStyle = {
        objectFit: objectFit,
        cursor: zooming ? 'zoom-in' : ''
    };

    const setZooming = () => {
        if (zooming) {
            toggleZoomedView();
        }
    };

    const handleClick = (id) => {
        switch (id) {
            case 'prev':
                if (currentSlide == 0) {
                    setCurrentSlide(slides.length - 1);
                } else {
                    setCurrentSlide(currentSlide - 1);
                }
                break;
            case 'next':
                if (currentSlide == slides.length - 1) {
                    setCurrentSlide(0);
                } else {
                    setCurrentSlide(currentSlide + 1);
                }
                break;
            default:
                setCurrentSlide(id);
                break;
        }
    };

    return (
        <div className="slider">
            <div className="slider-current" style={currentStyle}>
            
                {appearence === 'single' ?
                    slides.map((slide, i) => (
                        <img src={slide}
                        name='slide'
                        key={i}
                        alt={`slide${i + 1}`} 
                        onClick={setZooming}
                        style={imageStyle}
                        className={`${i === currentSlide ? 'active' : ''}`}
                        />
                    )) :
                    slides.map((slide, i) => (
                        <div className="slider-current-wrapper">
                            <img src={slide} 
                            alt={`slide${i + 1}`} 
                            key={i}
                            onClick={() => {toggleZoomedView(); handleClick(i)} }
                            className={`${i === currentSlide ? 'active' : ''}`}
                            />
                        </div>
                    ))
                }

                <div className="slider-dots" style={dotsStyle}>
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className={`slider-dots-single ${i === currentSlide ? 'active' : ''}`}
                            onClick={() => handleClick(i)}
                        >
                        </div>
                    ))}
                </div>
                

                <div onClick={() => handleClick('prev')} style={arrowStyle} className="slider-arrow-left">
                    <div>
                        <span style={arrowSpanStyle}></span>
                        <span style={arrowSpanStyle}></span>
                    </div>
                </div>
                <div onClick={() => handleClick('next')} style={arrowStyle} className="slider-arrow-right">
                    <div>
                        <span style={arrowSpanStyle}></span>
                        <span style={arrowSpanStyle}></span>
                    </div>
                </div>
            </div>


            {preview ?
                (<div className="slider-preview" style={{display: slidesNumber < 2 ? 'none' : ''}}>
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className={`slider-preview-single ${i === currentSlide ? 'active' : ''}`}
                            onClick={() => handleClick(i)}
                        >
                            <img src={slide} alt={`slide${i + 1}`} />
                        </div>
                    ))}
                </div>)
                : null
            }
            
            <div className="slider-zoom" style={{display: isZoomedView? 'block' : 'none'}}>
                <div className="slider-zoom-current">
                    {slides.map((slide, i) => (
                        <img key={i} src={slide} alt={`slide${i + 1}`} className={`${i === currentSlide ? 'active' : ''}`}/>
                    ))}
                </div>

                <div name="zoom" onClick={toggleZoomedView}>
                    <img src={zoomIn} alt="zoom-in" />
                </div>
                <div name="close" onClick={toggleZoomedView}>
                    <img src={close} alt="close" />
                </div>

                <div onClick={() => handleClick('prev')} style={{display: slidesNumber < 2 ? 'none' : ''}} className="slider-arrow-left">
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div onClick={() => handleClick('next')} style={{display: slidesNumber < 2 ? 'none' : ''}} className="slider-arrow-right">
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideCarousel;