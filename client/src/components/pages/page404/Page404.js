import { Link } from 'react-router-dom';

import ErrorMessage from '../../errorMessage/ErrorMessage';

import './page404.scss';

const Page404 = () => {
    return (
        <div className='container_error'>
            <ErrorMessage/>
            <h1 className='error'>We could not find the page on our server</h1>
            <h2>Please redirect to the <Link end to={`/`}>Main page</Link> or <Link end to={`/project`}>Project page</Link></h2>
        </div>
    )
}

export default Page404;