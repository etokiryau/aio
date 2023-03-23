import { useState } from 'react';

import './mediaStub.scss';

const MediaStub = ({src, alt}) => {
    const [popup, setPopup] = useState(false);

    const togglePopup = () => {
        setPopup(!popup);

        setTimeout(() => setPopup(false), 2000)
    };

    return (
        <>
            <img onClick={togglePopup} src={src} alt={alt} className='image'/>
            <div onClick={togglePopup} className={`popup ${popup ? 'active' : ''}`}>
                <p>Media is under development</p>
                <p>Stay tuned!</p>
            </div>
        </>
    )
}

export default MediaStub;