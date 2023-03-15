import error from './error.png';

const ErrorMessage = () => {

    return (
        <img style={{display: 'block', width: '120px', height: '120px', objectFit: 'contain', margin: '0 auto'}} src={error} alt="error" />
    )
}

export default ErrorMessage;