import { useEffect, useRef } from 'react';

import './singleAdvantage.scss';

const SingleAdvantage = ({data}) => {

    const videoRefs = useRef([]);

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
        <div className="advantage">
            <div className="advantage__info" >
                <p>Example</p>
                <h2>{data.name}</h2>
                <h3>{data.descr}</h3>
            </div>
            <div className="advantage__video">
                <video ref={el => videoRefs.current[0] = el} src={data.video} type="video/mp4" preload="auto" data-autoplay playsInline autoPlay loop muted></video>
                <h3>{data.descr}</h3>
            </div>
        </div>
    )
}

export default SingleAdvantage;