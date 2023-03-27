import { Helmet } from "react-helmet";

const SupportPage = () => {
    
    return (
        <>
            <Helmet>
                <title>Support</title>
                <meta property="og:title" content="Support" />
                <meta property="og:url" content="http://www.aio-construction.online/support" />
            </Helmet>
      
            <div style={{paddingTop: '50px', textAlign: 'center'}}>
                <h1>Support</h1>
                <h2 style={{marginTop: '20px'}}>In case you have issues with platform, please contact your administrator</h2>
            </div>
        </>
    )
}

export default SupportPage;