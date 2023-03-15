import { useState, useEffect, useRef} from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useAutodeskPlatformService } from "../../../../services/AutodeskPlatformService";
import arrow from './img/arrow.svg';

import './solutionViewerPage.scss';

const SolutionViewer = () => {

    const [modelUrn, setModelUrn] = useState('');

    const viewerContainer = useRef(null);

    let navigate = useNavigate();
    let location = useLocation();

    const { renderViewer } = useAutodeskPlatformService();

    useEffect(() => {
        setModelUrn(location.state);
    }, [])

    useEffect(() => {
        renderViewer(modelUrn, viewerContainer);
    }, [modelUrn])
    
    const backToDocumentationPage = () => {
        let isFromDocumentation = location.pathname.includes('documentation') > 0 ? true : false;
        isFromDocumentation ? navigate(-1) : navigate('/documentation');
    }

    return (
        <div className="solution">
            <div onClick={backToDocumentationPage} className="solution__back">
                <img src={arrow} alt="arrow" />
                <p>Back</p>
            </div>
            <div className="solution__viewer" ref={viewerContainer} />
        </div>
    )
}

export default SolutionViewer;