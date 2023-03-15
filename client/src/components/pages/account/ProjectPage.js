import PersonalAccount from "../../personalAccount/PersonalAccount"
import ProjectStatistics from "../../projectStatistics/ProjectStatistics";
import ProjectWeatherCondition from "../../projectWeatherCondition/ProjectWeatherCondition";

const Project = () => {
    return (
        <div className="project">
            <PersonalAccount />
            <ProjectWeatherCondition/>
            <ProjectStatistics/>
        </div>
    )
}

export default Project;