import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import aioLogo from './img/aioLogo.png';
import downArrow from './img/downArrow.png';
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
    const videoRefs = useRef([]);
    const platformRef = useRef(null);
    const infoRef = useRef(null);

    const handleFocus = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop - 100,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        const options = {
            root: document.querySelector('main'),
            rootMargin: '0px',
            threshold: 1.0
        }

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

    return (
        <div className="home">
            <div className="home__start">
                <div className="home__start-video">
                    <video ref={el => videoRefs.current[0] = el} src={mainVideo} type="video/mp4" preload="auto" data-autoplay playsInline autoPlay loop muted></video>
                </div>
                
                <div className="home__start-navigate">
                    <img src={aioLogo} alt="logo" />
                    <Link to="/projects">High-tech projects of cottages</Link>
                    <img onClick={() => handleFocus(infoRef)} src={downArrow} alt="down-arrow" />
                </div>
            </div>

            <div className="home__info" ref={infoRef}>
                <h1>INNOVATIVE TECHNOLOGIES IN PRIVATE CONSTRUCTION</h1>
                <h3>BIM-projects</h3>
                <p>A solution that will allow you to:</p>
                <div className="home__info-allow">
                    <div className="home__info-allow-statistics">
                        <div>
                            <span>15%</span>
                            <span>30%</span>
                            <span>100%</span>
                        </div>
                        <div>
                            <p>Saving money</p>
                            <p>Reducing construction time</p>
                            <p>Better quality project</p>
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
                </div>
            </div>

            <div className="home__map">
                <h2>Project adaptation map</h2>
                <h3>The technology of our projects is developed by these countries</h3>
                <div className="home__map-content">
                    <img src={worldMap} alt="map" />
                    <Link to="/map">
                        <img src={cursor} alt="cursor" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;