import { Helmet } from "react-helmet";

import Projects from "../../projects/Projects";

const ProjectsPage = () => {

    return (
        <>
            <Helmet>
                <title>Projects</title>
                <meta property="og:title" content="Projects" />
                <meta property="og:url" content="http://www.aio-construction.online/projects" />
            </Helmet>

            <Projects/>
        </>
    )
}

export default ProjectsPage;