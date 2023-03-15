import { useState } from 'react';


import './documentationIndicators.scss'

const DocumentationIndicators = () => {

    const [listOpened, setListOpened] = useState(false);

    const listData = ['1 Bedroom 1 - 18.54', '2 Bedroom 2 - 13.28', '3 bathrooms 1 - 4.43', '4 bathrooms 2 - 4.85', '5 Kitchen-dining room - 40.35', '6 Boiler room - 4.94', '7 Terrace - 30.22'];

    const toggleListOpened = () => {
        setListOpened(!listOpened);
    }

    const renderList = () => {
        const delay = 0.02;
        const list = listData.map((item, i) => {
            return <li key={i} style={{animationDelay: `${i * delay}s`}}>{item} m<sup>2</sup></li>
        })

        return (
            <ul style={{display: listOpened ? 'block' : 'none'}}>
                {list}
            </ul>
        )
    }

    return (
        <div className="indicators">
            <p className="indicators__head">Main technical and economic indicators</p>
            <div className="indicators__external-wrapper">
                <div className="indicators__wrapper">
                    <div>Total area: 116 m<sup>2</sup></div>
                    <div>Height: 6,462 m<sup></sup></div>
                    <div>Living space: 72,15 m<sup>2</sup></div>
                </div>
            </div>
            <p className="indicators__spaces-head">Composition of spaces</p>
            <div className="indicators__external-spaces">
                <div className="indicators__spaces">
                    <div className="indicators__spaces-level">
                        <p>1st Floor</p>
                        <div onClick={toggleListOpened}
                        className="indicators__spaces-plus"
                        style={{transform: listOpened ? 'rotate(-45deg)' : 'none'}}>+</div>
                    </div>
                    {renderList()}
                </div>
            </div>
        </div>
    )
}

export default DocumentationIndicators;