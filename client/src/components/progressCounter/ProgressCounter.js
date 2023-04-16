import { useState, useEffect, useRef } from 'react';

import './progressCounter.scss';

const ProgressCounter = ({targetNumber, duration, loader = false, start = false}) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef();

    const animateCount = (target, duration) => {
        let start = null;
        const step = (timestamp) => {
            if (!start) start = timestamp;
            
            const progress = Math.min((timestamp - start) / duration, 1);

            setCount(Math.floor(progress * target));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    useEffect(() => {
        if (!loader) {
            const handleScroll = () => {
                const rect = counterRef.current.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    animateCount(targetNumber, duration);
                    window.removeEventListener('scroll', handleScroll);
                }
            };
        
            window.addEventListener('scroll', handleScroll);
            handleScroll();
        
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
        
    }, [targetNumber, duration]);

    useEffect(() => {
        if (loader && start) {
            animateCount(targetNumber, duration)
        }
    }, [loader, start])

    return (
        loader ? 
            <div className='tour-loader'>
                <div className="spinner">
                    <span></span>
                    <p>Loading {count}%</p>
                </div>
                
            </div>
        : 
            <div className="counter" ref={counterRef}>
                <svg>
                    <circle cx="50%" cy="50%" r="60"/>
                    <circle cx="50%" cy="50%" r="60"
                        strokeDashoffset={377 - (377 * count) / 100}/>
                </svg>
                <p name="progress">{count}%</p>
            </div>
    )
}

export default ProgressCounter;