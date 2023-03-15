import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

import { useAutodeskPlatformService } from "../../../../services/AutodeskPlatformService";
import SlideCarousel from "../../../slideCarousel/SlideCarousel";
import FloorSetup from '../../../floorSetup/FloorSetup';
import { data } from "../../../projects/data";

import book from './img/book.png';
import threeDIcon from './img/threeDIcon.png';
import close from './img/close.png';

import './singleProjectPage.scss';

const SingleProjectPage = () => {
    const { id } = useParams();

    const viewerContainer = useRef(null);

    const [isZoomedModel, setIsZoomedModel] = useState(false);

    const [isModelLoaded, setIsModelLoaded] = useState(false);
    const [isListOpened, setIsListOpened] = useState({
        'architecture': false,
        'structure': false,
        'mep': false,
        'threeD': false
    });

    const { renderViewer } = useAutodeskPlatformService();  

    const toggleListOpened = (event) => {
        const key = event.target.getAttribute('name');
        setIsListOpened({...isListOpened, [key]: !isListOpened[key]})
    };

    const toggleZoomedModel = () => {
        setIsZoomedModel(!isZoomedModel);
    };

    useEffect(() => {
        document.body.style.overflow = isZoomedModel  ? "hidden" : "visible";
    }, [isZoomedModel]);

    const getProjectIndex = () => {
        let index;
        data.forEach((item, i) => {
            const projName = item.name.toLowerCase().replace(' ', '_');
            if (projName === id) {
                index = i;
            }
        })

        return index;
    };

    const projectIndex = getProjectIndex();
   
    const project = data[projectIndex];

    const modelUrn = project.modelUrn;

    useEffect(() => {
        if (isZoomedModel && !isModelLoaded) {
            renderViewer(modelUrn, viewerContainer);
            setIsModelLoaded(true);
        }
    }, [isZoomedModel]);

    const sliderOptions = {
        arrows: true,
        dots: true
    };
    const drawingsSliderOptions = {
        appearence: 'all',
        arrowColor: false
    };

    return (
        <div className='project'>
            <h3>{project.code}</h3>
            <h1>{project.name}</h1>

            <div className='project__info'>
                <div className='project__info-left'>
                    <p>House project</p>
                    <p>{project.code}</p>
                </div>
                <div className='project__info-right'>
                    <p>${project.reducedPrice}</p>
                    <p>${project.price}</p>
                    <div>Buy</div>
                </div>
            </div>

            <div className='project__renders'>
                <SlideCarousel slides={project.renders} options={sliderOptions}/>
            </div>

            <div className='project__indicators'>
                <h2>Main technical indicators</h2>
                <div className='project__indicators-wrapper'>
                    <div className='project__indicators-single'>
                        <p name="value" id="area">{project.area} m</p>
                        <div></div>
                        <p name="property">Total area</p>
                    </div>
                    <div className='project__indicators-single'>
                        <p name="value">{project.height} m</p>
                        <div></div>
                        <p name="property">Height</p>
                    </div>
                    <div className='project__indicators-single'>
                        <p name="value">{project.dimensions} m</p>
                        <div></div>
                        <p name="property">Building dimension</p>
                    </div>
                </div>
            </div>

            <div className='project__model'>
                <div className='project__model-instructions'>
                    <a href="/instructions">
                        <img src={book} alt="instructions" />
                        <p>Instructions for our platform</p>
                    </a>
                </div>
                <div className='project__model-preview'>
                    <img name='background' src={project.preview} alt="preview" />
                    <div className='project__model-preview-open' onClick={toggleZoomedModel}>
                        <img src={threeDIcon} alt="threeD" />
                    </div>
                </div>

                <div className='project__model-popup' style={{display: isZoomedModel? 'block' : 'none'}}>
                    <div className='project__model-popup-viewer'>
                        <div ref={viewerContainer}></div>
                    </div>
                    <div className='project__model-popup-close' onClick={toggleZoomedModel}>
                        <img src={close} alt="close" />
                    </div>
                </div>
            </div>

            <div className='project__drawings'>
                <div className='project__drawings-head'>
                    <h4>House plan</h4>
                    <h5>EXAMPLES OF DRAWINGS FROM THE PROJECT</h5>
                </div>
              
                <div className='project__drawings-list'>
                    <SlideCarousel slides={project.drawings} options={drawingsSliderOptions}/>
                </div>
            </div>

            <div className='project__setup'>
                <div className='project__setup-head'>
                    <h4>Set-up of the house</h4>
                    <h5>FLOOR COMPOSITION OF SPACES</h5>
                </div>
                
                <div className='project__setup-list'>
                    {project.setup.map((item, i) => {
                        return (
                            <FloorSetup key={i} order={i} data={item} />
                        )
                    })}
                </div>
            </div>

            <div className='project__structure'>
                <div className='project__structure-head'>
                    <h4>Project structure</h4>
                    <h5>COMPOSITION OF DRAWINGS BY DESIGN SECTIONS</h5>
                </div>

                <div className='project__structure-line'></div>
                
                <div className='project__structure-single'>
                    <div onClick={(e) => toggleListOpened(e)} name='architecture' className='project__structure-single-head'>
                        <div name='name'>Architecture</div>
                        <div className="project__structure-single-head-plus"
                            style={{transform: isListOpened.architecture ? 'rotate(-45deg)' : 'none'}}>+</div>
                    </div>
                    <div name='list' className={isListOpened.architecture ? 'active' : ''}>
                        <ul>
                            <li>General information. Spaces area</li>
                            <li>List of sheets</li>
                            <li>Facades</li>
                            <li>The color scheme of the facades</li>
                            <li>Floor plans of buildings and structures with spaces explication</li>
                            <li>Roofing plan</li>
                            <li>Sections</li>
                            <li>Window and door list</li>
                            <li>Principal junctions</li>
                            <li>Bill of quantities</li>
                        </ul>
                    </div>
                </div>

                <div className='project__structure-line'></div>

                <div className='project__structure-single'>
                    <div onClick={(e) => toggleListOpened(e)} name='structure' className='project__structure-single-head'>
                        <div name='name'>Structural engineering</div>
                        <div className="project__structure-single-head-plus"
                            style={{transform: isListOpened.structure ? 'rotate(-45deg)' : 'none'}}>+</div>
                    </div>
                    <div name='list' className={isListOpened.structure? 'active' : ''}>
                        <ul>
                            <li>Load-bearing wall plan</li>
                            <li>Plan of the foundation bottom reinforcement</li>
                            <li>The plan of the foundation upper reinforcement</li>
                            <li>Plans of the slabs lower reinforcement</li>
                            <li>Plans of the slabs upper reinforcement</li>
                            <li>Sections</li>
                            <li>Reinforcement junctions sections</li>
                            <li>Reinforcement of columns and walls</li>
                            <li>List of details</li>
                            <li>Bill of quantities</li>
                        </ul>
                    </div>
                </div>

                <div className='project__structure-line'></div>

                <div className='project__structure-single'>
                    <div onClick={(e) => toggleListOpened(e)} name='mep' className='project__structure-single-head'>
                        <div name='name'>Mechanical, electrical and plumbing</div>
                        <div className="project__structure-single-head-plus"
                            style={{transform: isListOpened.mep ? 'rotate(-45deg)' : 'none'}}>+</div>
                    </div>
                    <div name='list' className={isListOpened.mep ? 'active' : ''}>
                        <div name='list-single'>
                            <p>Power supply system:</p>
                            <ul>
                                <li>Schematic diagrams of power supply of power receivers from the main, additional and backup power supply sources</li>
                                <li>Lightning plans</li>
                                <li>Power supply network plan</li>
                                <li>Socket placement layout</li>
                                <li>Schematic single-line diagram of the power supply</li>
                                <li>Bill of quantities</li>
                            </ul>
                        </div>

                        <div name='list-single'>
                            <p>Water supply system:</p>
                            <ul>
                                <li>General information</li>
                                <li>Water supply plan</li>
                                <li>Collector connection scheme</li>
                                <li>Plumbing fixture connection scheme</li>
                                <li>Water system isometry</li>
                                <li>House water inlet scheme</li>
                                <li>Bill of quantities</li>
                            </ul>
                        </div>

                        <div name='list-single'>
                            <p>Water disposal system:</p>
                            <ul>
                                <li>Sewerage systems plans</li>
                                <li>Plumbing fixture connection scheme</li>
                                <li>Sewerage system isometry</li>
                                <li>Bill of quantities</li>
                            </ul>
                        </div>
                        
                        <div name='list-single'>
                            <p>Heating, ventilation and air conditioning:</p>
                            <ul>
                                <li>General information</li>
                                <li>Floor heating plans</li>
                                <li>Floor heating isometry</li>
                                <li>Radiation system plans</li>
                                <li>Radiation system isometry</li>
                                <li>Collector connection scheme</li>
                                <li>Ventilation plans</li>
                                <li>Ventilation isometries</li>
                                <li>Principal scheme of boiler system</li>
                                <li>Boiler set-up layouts</li>
                                <li>Boiler piping scheme</li>
                                <li>Boiler equipment connection schemes</li>
                                <li>Axonometric diagrams</li>
                                <li>Bill of quantities</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='project__structure-line'></div>

                <div className='project__structure-single'>
                    <div onClick={(e) => toggleListOpened(e)} name='threeD' className='project__structure-single-head'>
                        <div name='name'>3D model</div>
                        <div className="project__structure-single-head-plus" 
                            style={{transform: isListOpened.threeD ? 'rotate(-45deg)' : 'none'}}>+</div>
                    </div>
                    <div name='list' className={isListOpened.threeD ? 'active' : ''}>
                        <ul>
                            <li>Instructions for working with a 3D model</li>
                            <li>3D model for all simulated sections exe file "Enscape" for a virtual tour of the object</li>
                            <li>Link to the browser version of the project with the ability to view all the documentation, walk around the facility and clarify the volumes from any device from anywhere in the world</li>
                        </ul>
                    </div>
                </div>

                <div className='project__structure-line'></div>
                
            </div>

            <div className='project__services'>
                <p name="head">Additional services</p>
                <p>Innovative services can be added to any of our projects</p>
                <Link to='/services'>
                    <svg name="above" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 70"><path d="M31.5 47c-1.1-.9-2.7-.7-3.5.4L20.2 57V5.8c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5V57l-7.8-9.7c-.8-1-2.4-1.2-3.5-.3-1.1.9-1.2 2.4-.4 3.5l12.2 15.2c.5.6 1.2.9 1.9.9s1.5-.3 1.9-.9l12.2-15.2c1-1.1.9-2.6-.2-3.5z"></path></svg>
                    <p>To learn more</p>
                    <svg name="left" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 180"><path d="M54.1 109c-.8 0-1.6-.4-2-1.1-.8-1.1-.5-2.7.6-3.5 1.3-.9 6.8-4 11.6-6.6-15.9-1.3-29.2-8.3-38.5-20.2C8.9 56 8.5 24.1 13.2 3.4c.3-1.3 1.7-2.2 3-1.9 1.3.3 2.2 1.7 1.9 3-4.5 19.6-4.2 49.8 11.6 70 9 11.5 21.5 17.7 37.2 18.4l-1.8-2.3c-1.4-1.7-2.7-3.4-4.1-5.1-.7-.9-1.5-1.9-2.3-2.9-.9-1.1-.7-2.6.4-3.5 1.1-.9 2.6-.7 3.5.4 0 0 0 .1.1.1l6.4 7.9c.5.5.9 1.1 1.4 1.7 1.5 1.8 3.1 3.6 4.4 5.6 0 .1.1.1.1.2.1.3.2.5.3.8v.6c0 .2-.1.4-.2.6-.1.1-.1.3-.2.4-.1.2-.3.4-.5.6-.1.1-.3.2-.5.3-.1 0-.1.1-.2.1-1.2.6-16 8.6-18.1 10-.5.5-1 .6-1.5.6z"></path></svg>
                </Link>
            </div>
            
        </div>
    )
}

export default SingleProjectPage;