import { Helmet } from "react-helmet";

const SmartHousePage = () => {
    return (
        <>
            <Helmet>
                <title>Smarthouse</title>
                <meta property="og:title" content="Smarthouse" />
                <meta property="og:url" content="http://www.aio-construction.online/smarthouse" />
            </Helmet>
        
            <div style={{
                marginTop: '105px',
                fontSize: '31px',
                textAlign: 'center',
            }}>
                This module is under development
            </div>
        </>
    )
}

export default SmartHousePage;