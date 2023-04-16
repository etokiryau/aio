import { useState, useEffect, useRef } from 'react';
import { Helmet } from "react-helmet";

import CustomLink from '../../../../utilis/CustomLink';

import aioLogo from './img/aioLogo.png';
import downArrow from './img/downArrow.svg';
import threeDIcon from './img/threeDIcon.png';
import deviceThread from './img/deviceThread.png';
import laptop from './img/laptop.png';
import tablet from './img/tablet.png';
import phone from './img/phone.png';
import worldMap from './img/worldMap.svg';
import cursor from './img/cursor.png';

import mainVideo from './video/mainVideo.mp4';
import mainVideoAcquaintance from './video/mainVideoAcquaintance.mp4';
import mainVideoAnyDevice from './video/mainVideoAnyDevice.mp4';
import mainVideoAccount from './video/mainVideoAccount.mp4';
import mainVideoEnscape from './video/mainVideoEnscape.mp4';


import './homePage.scss';

const HomePage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const videoRefs = useRef([]);
    const platformRef = useRef(null);
    const infoRef = useRef(null);

    const handleFocus = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop - 50,
            behavior: 'smooth'
        });
    };
    
    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const options = {
            root: document.querySelector('main'),
            rootMargin: '10px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.hasAttribute('data-autoplay')) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            });
        }, options);
    
        videoRefs.current.forEach(videoRef => {
            observer.observe(videoRef);
        });
    
        return () => {
            observer.disconnect();
        };
    }, []);

    const translationVelocity = 1.5;

    const setTransformStyle = (position) => {
        return windowWidth > 991 ? {
            transform: scrollPosition > position ? `translateX(${-(scrollPosition - position) * translationVelocity}px)` : 'none'
        } : {};
    }

    return (
        <>
            <Helmet>
                <title>High-tech projects of cottages | aio</title>
                <meta property="og:title" content="High-tech projects of cottages | aio" />
                <meta property="og:url" content="http://www.aio-construction.online/" />
            </Helmet>
        
            <div className="home">
                <div className="home__start">
                    <div className="home__start-video" style={setTransformStyle(0)}>
                        <video ref={el => videoRefs.current[0] = el} src={mainVideo} type="video/mp4" preload="auto" data-autoplay playsInline autoPlay loop muted></video>
                    </div>
                    
                    <div className="home__start-navigate">
                        <img src={aioLogo} alt="logo" style={setTransformStyle(100)}/>
                        <CustomLink to="/projects" style={setTransformStyle(200)}>High-tech projects of cottages</CustomLink>
                        <div onClick={() => handleFocus(infoRef)} style={setTransformStyle(400)}>
                            <img  src={downArrow} alt="down-arrow"  />
                        </div>    
                    </div>
                </div>

                <div className="home__info" ref={infoRef}>
                    <h1>INNOVATIVE TECHNOLOGIES IN PRIVATE CONSTRUCTION</h1>
                    <h3>BIM-projects</h3>
                    <p>A solution that will allow you to:</p>
                    <div className="home__info-allow">
                        <div className="home__info-allow-statistics">
                            <div className="home__info-allow-statistics-wrapper">
                                <CustomLink to="/advantages">
                                    <span>15%</span>
                                    <p>Saving money</p>
                                </CustomLink>
                                <CustomLink to="/advantages">
                                    <span>30%</span>
                                    <p>Reducing construction time</p>
                                </CustomLink>
                                <CustomLink to="/advantages">
                                    <span>100%</span>
                                    <p>Better quality project</p>
                                </CustomLink>
                            </div>
                        </div>
                        <div className="home__info-allow-threed">
                            <img onClick={() => handleFocus(platformRef)} src={threeDIcon} alt="3dicon" />
                        </div>
                    </div>
                </div>

                <div className="home__platform" ref={platformRef}>
                    <h2>AIO platform</h2>
                    <div className="home__platform-thread">
                        <div className="home__platform-thread-single">
                            <div>
                                <span>01</span>
                                <p>Explore the project using our platform before purchase</p>
                            </div>
                        </div>
                        <div className="home__platform-thread-single">
                            <div>
                                <span>02</span>
                                <p>Access to the project from any device</p>
                            </div>
                        </div>
                        <div className="home__platform-thread-single">
                            <div>
                                <span>03</span>
                                <p>Personal account with the access to the project</p>
                            </div>
                        </div>

                        <img src={laptop} alt="laptop" />
                        <img src={phone} alt="phone" />
                        <img src={tablet} alt="tablet" />
                        <img src={deviceThread} alt="thread" />

                        <div className="home__platform-thread-video1">
                            <video ref={el => videoRefs.current[1] = el} src={mainVideoAcquaintance} type="video/mp4" preload="auto" data-autoplay playsInline autoPlay loop muted></video>
                        </div>
                        <div className="home__platform-thread-video2">
                            <video ref={el => videoRefs.current[2] = el} src={mainVideoAnyDevice} type="video/mp4" preload="auto" data-autoplay playsInline autoPlay loop muted></video>
                        </div>
                        <div className="home__platform-thread-video3">
                            <video ref={el => videoRefs.current[3] = el} src={mainVideoAccount} type="video/mp4" preload="auto" data-autoplay playsInline autoPlay loop muted></video>
                        </div>
                    </div>
                </div>

                <div className="home__tour">
                    <h2>Virtual tour of the project</h2>
                    <div className="home__tour-enscape">
                        <video ref={el => videoRefs.current[4] = el} src={mainVideoEnscape} type="video/mp4" data-autoplay playsInline autoPlay loop muted></video>
                        
                        <CustomLink to="/projects/project_a" className="home__tour-enscape-link">
                            <p>Try Virtual Tour</p>
                        </CustomLink>
                    </div>
                </div>

                <div className="home__map">
                    <h2>Project adaptation map</h2>
                    <h3>The technology of our projects is developed by these countries</h3>
                    <div className="home__map-content">
                        <img src={worldMap} alt="map" />
                        <CustomLink to="/map">
                            <img src={cursor} alt="cursor" />
                        </CustomLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;