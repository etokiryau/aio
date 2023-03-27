import { Link, useResolvedPath } from 'react-router-dom';
import { Helmet } from "react-helmet";

import ErrorMessage from '../../errorMessage/ErrorMessage';

import './page404.scss';

const Page404 = () => {
    const { pathname } = useResolvedPath();

    return (
        <>
            <Helmet>
                <title>{`404 - ${pathname}`}</title>
            </Helmet>

            <div className='container_error'>
                <ErrorMessage/>
                <h1 className='error'>We could not find the page on our server</h1>
                <h2>Please redirect to <Link to={`/`}>Main page</Link> or <Link to={`/project`}>Account</Link></h2>
            </div>
        </>
    )
}

export default Page404;