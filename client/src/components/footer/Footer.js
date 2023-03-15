import CustomLink from '../../utilis/CustomLink';

import instagramLogo from './img/instagramLogo.png';
import facebookLogo from './img/facebookLogo.png';
import linkedinLogo from './img/linkedinLogo.png';

import './footer.scss';

const Footer = () => {

    return (
        <footer>
            <div className='footer__line'></div>
            <div className='footer__content'>
                <div className='footer__content-links'>
                    <p>© 2023 All rights reserved by "aio"</p>
                    <CustomLink to='/blog'>Blog</CustomLink>
                    <CustomLink to='/policy'>Privacy Policy</CustomLink>
                </div>
                <div className='footer__content-media'>
                    <a href=""><img src={instagramLogo} alt="instagram" /></a>
                    <a href=""><img src={facebookLogo} alt="facebook" /></a>
                    <a href=""><img src={linkedinLogo} alt="linkedin" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;