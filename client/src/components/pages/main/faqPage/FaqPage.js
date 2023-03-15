import { useState } from "react";

import CustomLink from "../../../../utilis/CustomLink";

import "./faqPage.scss";

const FaqPage = () => {

    const [isListOpened, setIsListOpened] = useState({
        'pay': false,
        'recieve': false,
        'inclusion': false,
        'electronic': false,
        'networks': false
    });

    const toggleListOpened = (event) => {
        const key = event.target.getAttribute('name');
        setIsListOpened({...isListOpened, [key]: !isListOpened[key]})
    };

    return (
        <div className="faq">
            <h1>FAQ</h1>
            <h2>Here you can find the answer to the most popular questions</h2>

            <div className="faq__list">
                <div className='faq__list-line'></div>

                <div className='faq__list-single'>
                    <div onClick={(e) => toggleListOpened(e)} name='pay' className='faq__list-single-head'>
                        <div name='name'>How to pay</div>
                        <div className="faq__list-single-head-plus"
                            style={{transform: isListOpened.pay ? 'rotate(-45deg)' : 'none'}}>+</div>
                    </div>
                    <div name='list' className={isListOpened.pay ? 'active' : ''}>
                        <ul>
                            <li>You can pay for any project online</li>
                        </ul>
                    </div>
                </div>

                <div className='faq__list-line'></div>

                <div className='faq__list-single'>
                    <div onClick={(e) => toggleListOpened(e)} name='recieve' className='faq__list-single-head'>
                        <div name='name'>How will I receive documentation?</div>
                        <div className="faq__list-single-head-plus"
                            style={{transform: isListOpened.recieve ? 'rotate(-45deg)' : 'none'}}>+</div>
                    </div>
                    <div name='list' className={isListOpened.recieve ? 'active' : ''}>
                        <ul>
                            <li>Documentation will be available immediately after the purchase in your account. It can be viewed using our platform or download PDF</li> 
                        </ul>
                    </div>
                </div>

                <div className='faq__list-line'></div>

                <div className='faq__list-single'>
                    <div onClick={(e) => toggleListOpened(e)} name='inclusion' className='faq__list-single-head'>
                        <div name='name'>What is included in the project?</div>
                        <div className="faq__list-single-head-plus"
                            style={{transform: isListOpened.inclusion ? 'rotate(-45deg)' : 'none'}}>+</div>
                    </div>
                    <div name='list' className={isListOpened.inclusion ? 'active' : ''}>
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

                <div className='faq__list-line'></div>

                <div className='faq__list-single'>
                    <div onClick={(e) => toggleListOpened(e)} name='electronic' className='faq__list-single-head'>
                        <div name='name'>Can I receive the project in electronic form?</div>
                        <div className="faq__list-single-head-plus"
                            style={{transform: isListOpened.electronic ? 'rotate(-45deg)' : 'none'}}>+</div>
                    </div>
                    <div name='list' className={isListOpened.electronic ? 'active' : ''}>
                        <ul>
                            <li>Yes, the project is available in electronic form immediately after purchase in your account</li>
                        </ul>
                    </div>
                </div>

                <div className='faq__list-line'></div>

                <div className='faq__list-single'>
                    <div onClick={(e) => toggleListOpened(e)} name='networks' className='faq__list-single-head'>
                        <div name='name'>What is engineering networks? Are they part of the project?</div>
                        <div className="faq__list-single-head-plus"
                            style={{transform: isListOpened.networks ? 'rotate(-45deg)' : 'none'}}>+</div>
                    </div>
                    <div name='list' className={isListOpened.networks ? 'active' : ''}>
                        <ul>
                            <li>Engineering networks are communication systems needed for the operation of the project, such as electricity, plumbing, heating, ventilation, air conditioning.
                                Yes, all projects have well-developed sections of engineering networks</li>
                        </ul>
                    </div>
                </div>

                <div className='faq__list-line'></div>

                <div className='faq__list-single'>
                    <div onClick={(e) => toggleListOpened(e)} name='changes' className='faq__list-single-head'>
                        <div name='name'>Is it possible to make changes to the project documentation?</div>
                        <div className="faq__list-single-head-plus"
                            style={{transform: isListOpened.changes ? 'rotate(-45deg)' : 'none'}}>+</div>
                    </div>
                    <div name='list' className={isListOpened.changes ? 'active' : ''}>
                        <ul>
                            <li>To make changes to the project, contact us at the specified contacts</li>
                        </ul>
                    </div>
                </div>

                <div className='faq__list-line'></div>
            </div>

            <div className='faq__beneath'>
                <p>Did not find an answer to your question? Ask us directly by email or phone</p>
                <CustomLink to='/contacts'>
                    <svg name="above" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 70"><path d="M31.5 47c-1.1-.9-2.7-.7-3.5.4L20.2 57V5.8c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5V57l-7.8-9.7c-.8-1-2.4-1.2-3.5-.3-1.1.9-1.2 2.4-.4 3.5l12.2 15.2c.5.6 1.2.9 1.9.9s1.5-.3 1.9-.9l12.2-15.2c1-1.1.9-2.6-.2-3.5z"></path></svg>
                    <p>Contacts</p>
                    <svg name="left" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 180"><path d="M54.1 109c-.8 0-1.6-.4-2-1.1-.8-1.1-.5-2.7.6-3.5 1.3-.9 6.8-4 11.6-6.6-15.9-1.3-29.2-8.3-38.5-20.2C8.9 56 8.5 24.1 13.2 3.4c.3-1.3 1.7-2.2 3-1.9 1.3.3 2.2 1.7 1.9 3-4.5 19.6-4.2 49.8 11.6 70 9 11.5 21.5 17.7 37.2 18.4l-1.8-2.3c-1.4-1.7-2.7-3.4-4.1-5.1-.7-.9-1.5-1.9-2.3-2.9-.9-1.1-.7-2.6.4-3.5 1.1-.9 2.6-.7 3.5.4 0 0 0 .1.1.1l6.4 7.9c.5.5.9 1.1 1.4 1.7 1.5 1.8 3.1 3.6 4.4 5.6 0 .1.1.1.1.2.1.3.2.5.3.8v.6c0 .2-.1.4-.2.6-.1.1-.1.3-.2.4-.1.2-.3.4-.5.6-.1.1-.3.2-.5.3-.1 0-.1.1-.2.1-1.2.6-16 8.6-18.1 10-.5.5-1 .6-1.5.6z"></path></svg>
                </CustomLink>
            </div>
        </div>
    )
}

export default FaqPage;