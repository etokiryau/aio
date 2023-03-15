import CustomLink from "../../../../utilis/CustomLink";

import aboutPicture from './img/aboutPicture.png';
import conveniencePicture from './img/conveniencePicture.png';
import careerPicture from './img/careerPicture.png';
import experiencePicture from './img/experiencePicture.png';
import projectsPicture from './img/projectsPicture.png';

import './careerPage.scss';

const CareerPage = () => {

    const handleScroll = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    return (
        <div className="career">
            <h1>Become part of the aio team</h1>

            <div className="career__positions">
                <div className="career__positions-single" onClick={handleScroll}>
                    <div>
                        <h3>Architect</h3>
                        <p>Experienced Architect Required...</p>
                    </div>
                    <div name="learn">
                        To learn more
                    </div>
                </div>

                <div className="career__positions-single" onClick={handleScroll}>
                    <div>
                        <h3>HVAC Engineer</h3>
                        <p>We are looking for an IT Specialist with experience in...</p>
                    </div>
                    <div name="learn">
                        To learn more
                    </div>
                </div>

                <div className="career__positions-single" onClick={handleScroll}>
                    <div>
                        <h3>WS engineer</h3>
                        <p>We are looking for an IT Specialist with experience in...</p>
                    </div>
                    <div name="learn">
                        To learn more
                    </div>
                </div>
            </div>

            <div className="career__provide">
                <h2>We provide</h2>
                <div className="career__provide-list">
                    <div className="career__provide-list-single">
                        <img src={projectsPicture} alt="star" />
                        <p name="name">Interesting projects</p>
                        <p name="descr">Development of revolutionary technologies</p>
                    </div>

                    <div className="career__provide-list-single">
                        <img src={careerPicture} alt="clock" />
                        <p name="name">Career</p>
                        <p name="descr">Professional development and career growth</p>
                    </div>

                    <div className="career__provide-list-single">
                        <img src={experiencePicture} alt="talking" />
                        <p name="name">Experience</p>
                        <p name="descr">Working with a team of high-level specialists</p>
                    </div>

                    <div className="career__provide-list-single">
                        <img src={conveniencePicture} alt="clock" />
                        <p name="name">Convenience</p>
                        <p name="descr">Remote work and flexible working hours</p>
                    </div>
                </div>
            </div>

            <div className="career__about">
                <img src={aboutPicture} alt="scenario" />
                <div>
                    <p name="company">AIO</p>
                    <h4>ABOUT OUR COMPANY</h4>
                    <p name="info">We are engaged in one of the most advanced vacation home design technologies that will forever change the way people buy projects, build and operate vacation homes</p>
                    <CustomLink to="/">To learn more</CustomLink>
                </div>
            </div>

            <div className="career__beneath">
                <p>Interested questions about a career and device can be asked by mail</p>
                <a href="mailto:career@aio.house">career@aio.house</a>
            </div>
        </div>
    )
}

export default CareerPage;