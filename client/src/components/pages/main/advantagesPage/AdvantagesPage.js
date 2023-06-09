import { Helmet } from "react-helmet";

import CustomLink from "../../../../utilis/CustomLink";
import SingleAdvantage from "../../../singleAdvantage/SingleAdvantage";
import ProgressCounter from "../../../progressCounter/ProgressCounter";

import complexityVideo from './video/complexityVideo.mp4';
import calculationsVideo from './video/calculationsVideo.mp4';
import detalizationVideo from './video/detalizationVideo.mp4';
import energyVideo from './video/energyVideo.mp4';
import technologyVideo from './video/technologyVideo.mp4';
import studyVideo from './video/studyVideo.mp4';

import './advantagesPage.scss';

const AdvantagesPage = () => {

    const data = [
        {
            name: 'Complex projects',
            descr: 'We develop projects of any complexity in all design categories including architecture, structure, interior, water supply, sewerage, heating, ventilation, gas supply and integrated automation',
            video: complexityVideo
        },
        {
            name: 'Highest project detail on the market',
            descr: 'We work out every element of design to ensure the highest projects quality',
            video: detalizationVideo
        },
        {
            name: 'High-precision calculations',
            descr: 'All projects, without exception, before publication are checked by the most modern calculation methods to determine the optimal design solutions that ensure the highest quality and reliable operation of the building',
            video: calculationsVideo
        },
        {
            name: 'Projects developed using the most advanced technologies',
            descr: 'Projects developed using the most advanced technologiesExampleDue to the application of the most advanced design practices, each project has the highest quality, as well as the possibility of interaction with the project at the stage of its selection and construction',
            video: technologyVideo
        },
        {
            name: 'Energy efficient projects',
            descr: 'To make the energy efficient solution we calculate our analytical models on every potential climate impact. Each project has a passive house configuration',
            video: energyVideo
        },
        {
            name: 'Deep study of each design solution',
            descr: 'During project development, we generate and test many configurations of the future home and choose the best solutions to ensure ideal living conditions',
            video: studyVideo
        }
    ];

    return (
        <>
            <Helmet>
                <title>Advantages</title>
                <meta property="og:title" content="Advantages" />
                <meta property="og:url" content="http://www.aio-construction.online/advantages" />
            </Helmet>
        
            <div className="advantages">
                <h1>The main advantages of our projects</h1>
                <div className="advantages__list">
                    {data.map((item, i) => {
                        return (
                            <div key={i}>
                                <SingleAdvantage data={item} />
                            </div>
                        )
                    })}
                </div>

                <div className="advantages__benefits">
                    <h2>Benefits in numbers</h2>
                    <h3>The described advantages will allow you to achieve <br/>the following indicators</h3>

                    <div className="advantages__benefits-indicators">
                        <div className="advantages__benefits-indicators-single">
                            <ProgressCounter targetNumber={15} duration={2000}/>
                            <p>Saving money</p>
                        </div>

                        <div className="advantages__benefits-indicators-single">
                            <ProgressCounter targetNumber={30} duration={2000}/>
                            <p>Reduction of terms</p>
                        </div>

                        <div className="advantages__benefits-indicators-single">
                            <ProgressCounter targetNumber={100} duration={2000}/>
                            <p>Improving the quality of the project</p>
                        </div>
                    </div>

                    
                </div>

                <div className="advantages__benefits-conclusion">
                    <p>All our projects have these advantages</p>
                    <CustomLink to="/projects">Projects</CustomLink>
                </div>
                
            </div>
        </>
    )
}

export default AdvantagesPage;