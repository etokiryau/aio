import { useState, useEffect, useRef} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from 'react-redux';

import { useAutodeskPlatformService } from "../../../../services/AutodeskPlatformService";
import arrow from './img/arrow.svg';

import './solutionViewerPage.scss';

const SolutionViewer = () => {
    const [modelUrn, setModelUrn] = useState('');

    const viewerContainer = useRef(null);

    let navigate = useNavigate();
    let location = useLocation();

    const { renderViewer, stub } = useAutodeskPlatformService();

    const { list, currentDrawingUrn } = useSelector(state => state.drawings);
  
    useEffect(() => {
        setModelUrn(currentDrawingUrn);
    }, [currentDrawingUrn])

    useEffect(() => {
        if (modelUrn) {
            renderViewer(modelUrn, viewerContainer, true, true);
        }
    }, [modelUrn])
    
    const backToDocumentationPage = () => {
        let isFromDocumentation = location.pathname.includes('documentation') > 0 ? true : false;
        isFromDocumentation ? navigate(-1) : navigate('/documentation');
    }

    return (
        <>
            <Helmet>
                <title>Solution</title>
                <meta property="og:title" content="Solution" />
                <meta property="og:url" content="http://www.aio-construction.online/solution" />
            </Helmet>
        
            <div className="solution">
                <div onClick={backToDocumentationPage} className="solution__back">
                    <img src={arrow} alt="arrow" />
                    <p>Back</p>
                </div>
                <div className="solution__viewer" ref={viewerContainer} />
                {stub}
            </div>
        </>
    )
}

export default SolutionViewer;