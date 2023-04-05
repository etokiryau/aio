import { useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { updateDrawings, setCurrentDrawingUrn } from './drawingsSlice';

import book from './img/book.png';
import pdf from './img/pdf.png';
import threeDIcon from './img/threeDIcon.png';
import modelPower from './img/modelPower.png';
import modelArch from './img/modelArch.png';
import modelConstruct from './img/modelConstruct.png';
import modelHeating from './img/modelHeating.png';
import modelWater from './img/modelWater.png';

import './drawings.scss';

const Drawings = () => {
    const solutionRefs = useRef([]);

    const { list } = useSelector(state => state.drawings);
    const dispatch = useDispatch();

    const solutionData = [
        {
            id: 'architecture',
            name: 'Architectural solutions',
            downloadUrl: 'https://drive.google.com/u/0/uc?id=1NXoSsI1DykF-jmy7qZyA_s18WE9vIpFk&export=download',
            backgroundImage: modelArch,
            urn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dHN3aWdsenZ5dWJtbTZwaG04d2Ria2IzZHhqbmZrcnYtcHJvamVjdF9hLzAtMDAxXyVEMCU5RCVEMCVCRSVEMCVCQiVEMCVCOF8lRDAlOTAlRDAlQTBfRU5HLnJ2dA'
        },
        {
            id: 'construct',
            name: 'Constructive solutions',
            downloadUrl: 'https://drive.google.com/u/0/uc?id=1_ifsD7M10Gf-iECQUCNGo0ms0gMtRQW0&export=download',
            backgroundImage: modelConstruct,
            urn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cHJvamVjdF9hX2J5L3Byb2plY3RfYV9jLnppcA'
        },
        {
            id: 'water',
            name: 'Water, sanitation',
            downloadUrl: 'https://drive.google.com/u/0/uc?id=13WVGhUZTjihunNqsn04SGhJI5Yu9CSBq&export=download',
            backgroundImage: modelWater,
            urn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cHJvamVjdF9hX2J5L3Byb2plY3RfYV9wcy56aXA'
        },
        {
            id: 'heating',
            name: 'Heating, ventilation',
            downloadUrl: 'https://drive.google.com/u/0/uc?id=1wonYKpPbLGb30vZgWbZZaUhZAJsXS8-f&export=download',
            backgroundImage: modelHeating,
            urn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cHJvamVjdF9hX2J5L3Byb2plY3RfYV9odmFjX3YxLnppcA'
        },
        {
            id: 'power',
            name: 'Power supply',
            downloadUrl: 'https://drive.google.com/u/0/uc?id=13WVGhUZTjihunNqsn04SGhJI5Yu9CSBq&export=download',
            backgroundImage: modelPower,
            urn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cHJvamVjdF9hX2J5L3Byb2plY3RfYV9wcy56aXA'
        }
    ];

    useEffect(() => {
        dispatch(updateDrawings(solutionData));
    }, [])

    const handleFocus = (i) => {
        window.scrollTo({
            top: solutionRefs.current[i].offsetTop - window.innerHeight / 2 + 120,
            behavior: 'smooth'
        });
    };

    const renderFocusButtons = () => {
        const buttons = list.map((item, i) => {
            return <li key={item.id} onClick={() => handleFocus(i)}>{item.name}</li>
        });

        return (
            <ul>
                {buttons}
            </ul>
        )
    }

    const renderSolutionList = () => {
        const solutions = list.map((item, i) => {
            return (
                <div key={item.id} ref={el => solutionRefs.current[i] = el} className="drawings__solutions-single">
                    <div className="drawings__solutions-single-left">
                        <p>{item.name}</p>
                        <a href={item.downloadUrl}>
                            <img src={pdf} alt="pdf" />
                            <p>Download drawings</p>
                        </a>
                    </div>
                    <div style={{backgroundImage: `url(${item.backgroundImage})`}} className="drawings__solutions-single-right">
                        <Link to={`/documentation/${item.id}`}  onClick={() => dispatch(setCurrentDrawingUrn(item.urn))}>
                            <div>          
                                <img src={threeDIcon} alt="3d-icon" />
                            </div>
                        </Link>
                    </div>
                </div>
            )
        });

        return solutions;
    };

    const solutionList = useMemo(() => renderSolutionList(), [solutionData]);
    const focusButtons = useMemo(() => renderFocusButtons(), [solutionData]);

    return (
        <div className="drawings">
            <p className='drawings__head'>Drawings</p>
            <p className='drawings__head-beneath'>Check out the drawings online or download them</p>
            <div className="drawings__disciplines">
                {focusButtons}
            </div>
            <div className='drawings__instruction'> 
                <a href='/instructions' target="_blank">
                    <img src={book} alt="instruction" />
                    <p>Instructions for our platform</p>
                </a>
            </div>
            <div className='drawings__solutions'>
                {solutionList}
            </div>
        </div>
    )
}

export default Drawings;