import CustomLink from "../../utilis/CustomLink";
import SlideCarousel from "../slideCarousel/SlideCarousel";
import { data } from "./data";

import "./projects.scss";

const Projects = () => {

    const renderSlides = (data) => {
        const content = data.map((item, i) => {
            const id = item.name.toLowerCase().replace(' ', '_');

            const sliderOptions = {
                preview: true,
                arrows: true,
                appearence: 'single'
            }
            
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

    const content = renderSlides(data);
    
    return (
        <div className="projects">
           {content}
        </div>
    )
}

export default Projects;