import { Helmet } from "react-helmet";

import DocumentationIndicators from "../../documentationIndicators/DocumentationIndicators";
import Drawings from "../../drawings/Drawings";

const DocumentationPage = () => {
    return (
        <>
            <Helmet>
                <title>Documentation</title>
                <meta property="og:title" content="Documentation" />
                <meta property="og:url" content="http://www.aio-construction.online/documentation" />
            </Helmet>

            <DocumentationIndicators/>
            <Drawings/>
        </>
        
    )
}

export default DocumentationPage;