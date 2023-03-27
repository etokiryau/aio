import { Helmet } from "react-helmet";

import PersonalAccount from "../../personalAccount/PersonalAccount"
import ProjectStatistics from "../../projectStatistics/ProjectStatistics";
import ProjectWeatherCondition from "../../projectWeatherCondition/ProjectWeatherCondition";

const Project = () => {
    return (
        <>
            <Helmet>
                <title>Project</title>
                <meta property="og:title" content="Project" />
                <meta property="og:url" content="http://www.aio-construction.online/project" />
            </Helmet>
        
            <div className="project">
                <PersonalAccount />
                <ProjectWeatherCondition/>
                <ProjectStatistics/>
            </div>
        </>
    )
}

export default Project;