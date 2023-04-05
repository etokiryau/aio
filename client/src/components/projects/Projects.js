import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateProjects } from './projectsSlice';
import CustomLink from "../../utilis/CustomLink";
import SlideCarousel from "../slideCarousel/SlideCarousel";
import { dataProjectsPage } from "./dataProjectsPage";

import "./projects.scss";

const Projects = () => {
    const { projectsList } = useSelector(state => state.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateProjects(dataProjectsPage));
    }, [])

    const sliderOptions = {
        preview: true,
        arrows: true,
        appearence: 'single'
    };

    const renderProjects = (data) => {
        const content = data.map((item) => {
            const id = item.name.toLowerCase().replace(' ', '_');

            return (
                <div key={id} className="projects__single">
                    <div className="projects__single-slider">
                        <SlideCarousel slides={item.renders} options={sliderOptions} />
                    </div>
                    
                    <div className="projects__single-description">
                        <h3>{item.name}</h3>
                        <p>{item.code}</p>
                        <p>S={item.area} m<sup>2</sup></p>
                        <CustomLink to={`/projects/${id}`}>To learn more</CustomLink>
                        <p>{item.descr}</p>
                    </div>
                </div>
            )
        })

        return content;
    }

    const content = renderProjects(projectsList);
    
    return (
        <div className="projects">
           {content}
        </div>
    )
}

export default Projects;