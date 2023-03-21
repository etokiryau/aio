import { useState, useMemo } from "react";
import { Formik, Field, Form, useFormik } from 'formik';

import { useHttp } from "../.././../../hooks/http.hook";

import './servicesPage.scss';

const ServicesPage = () => {
    const [responseMessage, setResponseMessage] = useState('');

    const { loading, request } = useHttp();

    const formik = useFormik({
        initialValues: {
            service: 'individual',
            area: -1050,
            sections: ['architecture'],
            email: '',
            name: '',
            telephone: '',
            comment: '',
        },
        onSubmit: values => {
            handleSubmit(values);
        }
    });

    // const validate = values => {
    //     const errors = {};

    //     if (!values.telephone) {
    //         errors.telephone = 'Required';
    //    }
      
    //     if (!values.name) {
    //         errors.name = 'Required';
    //     }
      
    //     if (!values.email) {
    //        errors.email = 'Required';
    //     }

    //     if (!values.comment) {
    //         errors.comment = 'Required';
    //     }

    //     if (!values.service) {
    //         errors.service = 'Required';
    //     }

    //     if (values.sections.length === 0) {
    //         errors.sections = 'Required';
    //     }

    //     if (!values.area) {
    //         errors.area = 'Required';
    //     }
      
    //     return errors;
    // };

    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        const value = event.target.value;
    
        if (isChecked) {
            formik.setFieldValue(
                'sections', 
                [...formik.values.sections, value]
            );
        } else {
            formik.setFieldValue(
                'sections',
                formik.values.sections.filter(section => section !== value),
            );
        }
    };

    const calculateCost = () => {
        if (!formik.values.service || formik.values.sections.length === 0) {
            return 0;
        }

        let cost = 0;
        let service;

        switch (formik.values.service) {
            case 'individual':
                service = 15;
                break;
            case 'modelling':
                service = 7;
                break;
            case 'changes':
                service = 3;
                break;
            default:
                service = 0; 
        }

        const sections = formik.values.sections.reduce((sum, cur) => {
            switch (cur) {
                case 'architecture':
                    return sum + 0.4;
                case 'structure':
                    return sum + 0.3;
                case 'mep':
                    return sum + 0.3;
                default:
                    throw new Error('There is no such section')
            };
        }, 0)
        
        cost = service * (formik.values.area + 1550) * sections;

        return cost;
    }

    const cost = Math.ceil(calculateCost());

    const handleSubmit = async (values) => {
        const sendingData = {
            ...values,
            area: formik.values.area + 1550,
            totalCost: cost
        };

        for (let key in sendingData) {
            if (!sendingData[key]) {
                return;
            }

            if (key === 'sections' && sendingData[key].length === 0) {
                return;
            }
        }
        
        try {
            const data = await request('/api/mailer/service', 'POST', sendingData);
            setResponseMessage(data.message);
        } catch (e) {
            setResponseMessage(e.message);
        }
    };

    const renderResponse = () => {
        switch (responseMessage) {
            case 'Email sent':
                return (
                    <div className="services__form-response">
                        Thank you! We will contact you shortly
                    </div>
                )
            default:
                return (
                    <div style={{backgroundColor: '#c44545'}} className="services__form-response">
                        Something went wrong. Please try again later
                    </div>
                )
        }
    };

    const responseContent = useMemo(() => renderResponse(), [responseMessage]);

    return (
        <div className="services">
            <h1>Calculator</h1>
            <h2>Preliminary calculation of the project cost</h2>

            {!responseMessage ? 
                <Formik
                initialValues={{
                    service: 'individual',
                    area: -1050,
                    sections: ['architecture'],
                    email: '',
                    name: '',
                    telephone: '',
                    comment: '',
                }}
                onSubmit={formik.handleSubmit}>
                    <Form className="services__form">
                        <div className="services__form-single">
                            <p>Basic services</p>
                            <label htmlFor="individual">
                                <Field type="radio" name="service" id="individual" value='individual'
                                    data-value='15' 
                                    checked={formik.values.service === 'individual'}
                                    onChange={formik.handleChange}></Field>
                                Individual design
                            </label>
                            <label htmlFor="dimension">
                                <Field type="radio" name="service" id="dimension" value='modelling'
                                    data-value='7' 
                                    checked={formik.values.service === 'modelling'}
                                    onChange={formik.handleChange}/>
                                2D to 3D
                            </label>
                            <label htmlFor="changes">
                                <Field type="radio" name="service" id="changes" value='changes'
                                data-value='3'
                                checked={formik.values.service === 'changes'}
                                onChange={formik.handleChange}/>
                                Making changes to the finished project
                            </label>
                        </div>

                        <div className="services__form-single">
                            <p>House area</p>
                            <label htmlFor="area">
                                <div style={{left: `calc(${(formik.values.area + 1450 ) * 100 / 2900}% - ${formik.values.area * 7.5 / 1450}px)`}}>{formik.values.area + 1550}</div>
                                <Field type="range" name="area" id="area" min="-1450" max="1450" step="25" 
                                    value={formik.values.area} 
                                    onChange={formik.handleChange}
                                    style={{backgroundSize: `${(formik.values.area + 1450 ) * 100 / 2900}%`}} />
                            </label>
                            <datalist id="range">
                                <option value="100" label="100"></option>
                                <option value="3000" label="3000"></option>
                            </datalist>
                        </div>

                        <div className="services__form-single">
                            <p>Basic services</p>
                            <label htmlFor="section-individual">
                                <Field type="checkbox" name="sections" id="section-individual" value="architecture"
                                    data-value='0.4'
                                    checked={formik.values.sections.includes('architecture')}
                                    onChange={handleCheckboxChange} />
                                Architecture
                            </label>
                            <label htmlFor="section-dimension">
                                <Field type="checkbox" name="sections" id="section-dimension" value="structure"
                                    data-value='0.3'
                                    checked={formik.values.sections.includes('structure')}
                                    onChange={handleCheckboxChange} />
                                Structural engineering
                            </label>
                            <label htmlFor="section-changes">
                                <Field type="checkbox" name="sections" id="section-changes" value="mep" 
                                data-value='0.3'
                                checked={formik.values.sections.includes('mep')}
                                onChange={handleCheckboxChange} />
                                Mechanical, electrical and plumbing
                            </label>
                        </div>

                        <div className="services__form-single">
                            <p>Project cost</p>
                            <p name="total">Total: {cost}USD</p>
                        </div>

                        <h3>Submit application</h3>

                        <div className="services__form-single"> 
                            <p>Email</p>
                            <Field 
                                className="services__form-input"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Your email" />
                        </div>

                        <div className="services__form-single">
                            <p>Name</p>
                            <Field
                                className="services__form-input"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                id="name"
                                name="name"
                                placeholder="Your name"
                                type="text"
                            />
                        </div>

                        <div className="services__form-single">
                            <p>Telephone</p>
                            <Field
                                className="services__form-input"
                                value={formik.values.telephone}
                                onChange={formik.handleChange}
                                id="telephone"
                                name="telephone"
                                type="tel"
                            />
                        </div>

                        <div className="services__form-single">
                            <p>Comment</p>
                            <Field
                                className="services__form-input"
                                value={formik.values.comment}
                                onChange={formik.handleChange}
                                id="comment"
                                name="comment"
                                placeholder="Enter a comment"
                                as="textarea"
                            />
                        </div>
                        <div className="services__form-button">
                            <button type="submit" disabled={loading}>Send</button>
                        </div>
                    </Form>
                </Formik>
                : responseContent }
        </div>
    )
}

export default ServicesPage;