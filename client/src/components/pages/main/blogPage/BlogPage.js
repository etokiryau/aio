import { useRef } from 'react';
import { Helmet } from "react-helmet";

import downArrow from '../homePage/img/downArrow.svg'
import articlePreview1 from './img/articlePreview1.jpg'

import './blogPage.scss';

const BlogPage = () => {

    const articlesRef = useRef(null);

    const handleFocus = () => {
        window.scrollTo({
            top: articlesRef.current.offsetTop,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <Helmet>
                <title>Blog</title>
                <meta property="og:title" content="Blog" />
                <meta property="og:url" content="http://www.aio-construction.online/blog" />
            </Helmet>
        
            <div className='blog'>
                <div className='blog__head'>
                    <div>
                        <h1>Blog AIO</h1>
                        <h2>We write about country houses, architecture, design, modern technologies in construction and design</h2>
                    </div>
                    <img onClick={handleFocus} src={downArrow} alt="down-arrow" />
                </div>
                <div className='blog__articles' ref={articlesRef}>
                    <div className='blog__articles-single'>
                        <div>
                            <img src={articlePreview1} alt="article" />
                        </div>
                        <p name="date">THURSDAY, AUGUST 12</p>
                        <p name="title">What is it BIM and how to use it</p>
                        <p name="description">The first paragraph</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPage;