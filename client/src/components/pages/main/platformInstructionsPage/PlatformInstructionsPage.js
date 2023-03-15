import { useState, useEffect, useRef } from 'react';
import { Formik, Field, Form } from 'formik';

import laptop from '../homePage/img/laptop.png';
import toolbarPicture from './img/toolbarPicture.jpg';

import orbit from './img/orbit.gif';
import pan from './img/pan.gif';
import zooming from './img/zooming.gif';
import person from './img/person.gif';
import cube from './img/cube.gif';
import controllers from './img/controllers.png';

import measurement from './img/measurement.gif';
import section from './img/section.gif';
import documentBrowser from './img/documentBrowser.gif';
import breakMode from './img/breakMode.gif';

import modelBrowser from './img/modelBrowser.gif';
import properties from './img/properties.gif';
import fullScreen from './img/fullScreen.gif';

import mainVideoAcquaintance from '../homePage/video/mainVideoAcquaintance.mp4';

import './platformInstructionsPage.scss';

const PlatformInstructionsPage = () => {
    const [tools1, setTools1] = useState('orbit');
    const [tools2, setTools2] = useState('measurement');
    const [tools3, setTools3] = useState('modelBrowser');

    const toolsData1 = {
        orbit: {
            image: orbit, 
            description: 'With this tool you can rotate the camera around the 3D image. Relative to axis or in free mode.'
        },
        pan: {
            image: pan, 
            description: 'This tool allows you to move the camera from side to side and from top to bottom.'
        },
        zooming: {
            image: zooming, 
            description: 'Moves the camera closer or further away from certain aspects of the design.'
        },
        person: {
            image: person, 
            description: 'The tool gives users the ability to explore buildings as if they were walking and looking around in first person.'
        },
        cube: {
            image: cube, 
            description: 'In the upper right corner you will see the ViewCube, a clickable and draggable UI element that allows you to rotate around the model. The house icon allows you to return to the original view.'
        }
    };

    const toolsData2 = {
        measurement: {
            image: measurement, 
            description: 'Measures the distance between two points or the angle between three points.'
        },
        section: {
            image: section, 
            description: 'Cuts the structure along an axis with a plane or through a selected rectangle to allow users to view the inside of the building.'
        },
        documentBrowser: {
            image: documentBrowser, 
            description: 'When a project view is exported with multiple views, you can navigate through them using the Views panel.'
        },
        break: {
            image: breakMode, 
            description: 'Separates model geometry so that users can see separate parts of the design.'
        }
    };

    const toolsData3 = {
        modelBrowser: {
            image: modelBrowser, 
            description: '3D models usually consist of several separate parts. The house will have floors, walls, interior design and many other types of geometry. The Model Browser provides a user interface for navigating through model geometry. You can click, search, and hide certain parts of the model.'
        },
        properties: {
            image: properties, 
            description: 'Clicking "Properties" will open a modal window containing metadata about the design. This includes information such as part numbers, material type, and mechanical properties.'
        },
        fullScreen: {
            image: fullScreen, 
            description: 'Opens the viewer window in full screen.'
        }
    };

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
        <div className="instructions">
            <div className="instructions__head">
                <h3>AIO PLATFORM</h3>
                <h1>Instructions for our platform</h1>
                <p>Through our platform, users can take advantage of a set of tools to help them interact with and view projects</p>
                <div>
                    <img name="laptop" src={laptop} alt="laptop" />
                    <div name="laptop">
                        <video ref={el => videoRefs.current[0] = el} src={mainVideoAcquaintance} type="video/mp4" preload="auto" data-autoplay playsInline autoPlay loop muted></video>
                    </div>
                </div>
            </div>
            <div className="instructions__toolbar">
                <div className="instructions__toolbar-head">
                    <h2>Toolbar</h2>
                    <p>Most of the tools are available in the toolbar at the bottom of the screen (the toolbar changes slightly when switching between 2D and 3D views)</p>
                </div>
                <img src={toolbarPicture} alt="toolbar" />

                <div className="instructions__toolbar-categories">
                    <p>These tools fall into several categories based on what users can do with them:</p>
                    <div className="instructions__toolbar-categories-list">
                        <div className="instructions__toolbar-categories-list-single">
                            <p name="number">01</p>
                            <div></div>
                            <p name="description">Model navigation tools</p>
                        </div>

                        <div className="instructions__toolbar-categories-list-single">
                            <p name="number">02</p>
                            <div></div>
                            <p name="description">Dimension, section, transition tools for the component parts of the model</p>
                        </div>

                        <div className="instructions__toolbar-categories-list-single">
                            <p name="number">03</p>
                            <div></div>
                            <p name="description">Model Browser, Model Properties, and Full Screen Tools</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="instructions__navigation">
                
                <div className="instructions__navigation-single">
                    <h2>Navigation tools</h2>
                    <Formik>
                        <Form>
                            <Field
                                className="instructions__navigation-single-select"
                                id="select"
                                name="select"
                                as="select"
                                value={tools1}
                                onChange={(e) => {setTools1(e.target.value)}}
                            >
                                <option value="orbit">Orbit</option>
                                <option value="pan">Pan</option>
                                <option value="zooming">Zooming</option>
                                <option value="person">First person</option>
                                <option value="cube">Cube</option>
                            </Field>
                        </Form>
                    </Formik>
                    <div className="instructions__navigation-single-buttons">
                        <p className={`${tools1 === 'orbit' ? 'active' : ''}`} 
                            onClick={() => setTools1('orbit')}>Orbit</p>
                        <p className={`${tools1 === 'pan' ? 'active' : ''}`}
                            onClick={() => setTools1('pan')}>Pan</p>
                        <p className={`${tools1 === 'zooming' ? 'active' : ''}`}
                            onClick={() => setTools1('zooming')}>Zooming</p>
                        <p className={`${tools1 === 'person' ? 'active' : ''}`}
                            onClick={() => setTools1('person')}>First person</p>
                        <p className={`${tools1 === 'cube' ? 'active' : ''}`}
                            onClick={() => setTools1('cube')}>Species cube</p>
                    </div>
                    <div name='line'></div>
                    <div className="instructions__navigation-single-content">
                        <div>
                            <img src={toolsData1[tools1].image} alt="tool" />
                        </div>
                        <div>
                            <p>{toolsData1[tools1].description}</p>
                        </div>
                    </div>
                </div>

                <div className="instructions__navigation-single">
                    <h2>Measuring, Sectioning, Document Browser and Model Exploding Tools</h2>
                    <Formik>
                        <Form>
                            <Field
                                className="instructions__navigation-single-select"
                                id="select"
                                name="select"
                                as="select"
                                value={tools2}
                                onChange={(e) => {setTools2(e.target.value)}}
                            >
                                <option value="measurement">Measurement</option>
                                <option value="section">Cross section</option>
                                <option value="documentBrowser">Document browser</option>
                                <option value="break">Break the Mode</option>
                            </Field>
                        </Form>
                    </Formik>
                    <div className="instructions__navigation-single-buttons">
                        <p className={`${tools2 === 'measurement' ? 'active' : ''}`} 
                            onClick={() => setTools2('measurement')}>Measurement</p>
                        <p className={`${tools2 === 'section' ? 'active' : ''}`}
                            onClick={() => setTools2('section')}>Cross section</p>
                        <p className={`${tools2 === 'documentBrowser' ? 'active' : ''}`}
                            onClick={() => setTools2('documentBrowser')}>Document browser</p>
                        <p className={`${tools2 === 'break' ? 'active' : ''}`}
                            onClick={() => setTools2('break')}>Break the Mode</p>
                    </div>
                    <div name='line'></div>
                    <div className="instructions__navigation-single-content">
                        <div>
                            <img src={toolsData2[tools2].image} alt="tool" />
                        </div>
                        <div>
                            <p>{toolsData2[tools2].description}</p>
                        </div>
                    </div>
                </div>

                <div className="instructions__navigation-single">
                    <h2>Model browser measurement tools, properties and full screen</h2>
                    <Formik>
                        <Form>
                            <Field
                                className="instructions__navigation-single-select"
                                id="select"
                                name="select"
                                as="select"
                                value={tools3}
                                onChange={(e) => {setTools3(e.target.value)}}
                            >
                                <option value="modelBrowser">Model bowser</option>
                                <option value="properties">Properties</option>
                                <option value="fullScreen">In full screen</option>
                            </Field>
                        </Form>
                    </Formik>
                    <div className="instructions__navigation-single-buttons">
                        <p className={`${tools3 === 'modelBrowser' ? 'active' : ''}`} 
                            onClick={() => setTools3('modelBrowser')}>Model bowser</p>
                        <p className={`${tools3 === 'properties' ? 'active' : ''}`}
                            onClick={() => setTools3('properties')}>Properties</p>
                        <p className={`${tools3 === 'fullScreen' ? 'active' : ''}`}
                            onClick={() => setTools3('fullScreen')}>In full screen</p>
                    </div>
                    <div name='line'></div>
                    <div className="instructions__navigation-single-content">
                        <div>
                            <img src={toolsData3[tools3].image} alt="tool" />
                        </div>
                        <div>
                            <p>{toolsData3[tools3].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlatformInstructionsPage;