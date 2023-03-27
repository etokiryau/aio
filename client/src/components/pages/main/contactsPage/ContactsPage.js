import { useState, useMemo } from 'react';
import { Formik, Field, Form } from 'formik';
import { Helmet } from "react-helmet";

import { useHttp } from "../.././../../hooks/http.hook";
import MediaStub from '../../../mediaStub/MediaStub';

import mobilePicture from './img/mobilePicture.svg';
import mailPicture from './img/mailPicture.svg';
import instagramLogo from '../../../footer/img/instagramLogo.png';
import facebookLogo from '../../../footer/img/facebookLogo.png';
import youtubeLogo from '../../../footer/img/youtubeLogo.png';
import linkedinLogo from '../../../footer/img/linkedinLogo.png';

import './contactsPage.scss';

const ContactsPage = () => {
    const [responseMessage, setResponseMessage] = useState('');

    const { loading, request } = useHttp();

    const handleSubmit = async (values) => {
        try {
            const data = await request('/api/mailer/contact', 'POST', {...values});
            setResponseMessage(data.message);
        } catch (e) {
            setResponseMessage(e.message);
        }
    };

    const renderResponse = () => {
        switch (responseMessage) {
            case 'Email sent':
                return (
                    <div className="contacts__form-response">
                        Thank you! We will contact you shortly
                    </div>
                )
            default:
                return (
                    <div style={{backgroundColor: '#c44545'}} className="contacts__form-response">
                        Something went wrong. Please try again later
                    </div>
                )
        }
    }

    const responseContent = useMemo(() => renderResponse(), [responseMessage]);

    return (
        <>
            <Helmet>
                <title>Contacts</title>
                <meta property="og:title" content="Contacts" />
                <meta property="og:url" content="http://www.aio-construction.online/contacts" />
            </Helmet>
        
            <div className="contacts">
                <h1>Our contacts</h1>
                <h3>Contact us for all your questions</h3>
                <div className="contacts__means">
                    <div>
                        <img src={mobilePicture} alt="mobile" />
                        <p>+7-964-365-7110</p>
                    </div>
                    <div>
                        <img src={mailPicture} alt="mail" />
                        <a href="mailto:info@aio.house">info@aio.house</a>
                    </div>
                </div>

                <div className="contacts__media">
                    <h2>Our social networks</h2>
                    <div className="contacts__media-logos">
                        <MediaStub src={instagramLogo} alt={"instagram"}/>
                        <MediaStub src={facebookLogo} alt={"facebook"}/>
                        <MediaStub src={youtubeLogo} alt={"youtube"}/>
                        <MediaStub src={linkedinLogo} alt={"linkedin"}/>
                        {/* <a href=""><img src={instagramLogo} alt="instagram" /></a>
                        <a href=""><img src={facebookLogo} alt="facebook" /></a>
                        <a href=""><img src={youtubeLogo} alt="youtube" /></a>
                        <a href=""><img src={linkedinLogo} alt="linkedin" /></a> */}
                    </div>
                </div>

                <div className="contacts__form">
                    <h2>Leave your contacts so that we can contact you</h2>
                    {!responseMessage ? 
                        <Formik
                            initialValues={{
                                email: '',
                                name: '',
                                telephone: '',
                            }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                errors.email = 'Email is required';
                                }
                                if (!values.name) {
                                errors.password = 'Password is required';
                                }
                                if (!values.telephone) {
                                    errors.telephone = 'Password is required';
                                }
                                return errors;
                            }}
                            onSubmit={handleSubmit}
                        >
                            <Form className="contacts__form-wrapper">   
                                <Field 
                                    className="contacts__form-input" 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Your email" />
                            
                                <Field
                                    className="contacts__form-input"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    type="text"
                                />        

                                <Field
                                    className="contacts__form-input"
                                    id="telephone"
                                    name="telephone"
                                    placeholder="Your telephone"
                                    type="tel"
                                />
                            
                                <div className="contacts__form-button">
                                    <button type="submit" disabled={loading}>Send</button>
                                </div>
                            </Form>
                        </Formik>
                    :   responseContent }
                </div>
            </div>
        </>
    )
}

export default ContactsPage;