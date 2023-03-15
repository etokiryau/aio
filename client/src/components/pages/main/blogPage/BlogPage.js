import { useRef } from 'react';

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
        <div className='blog'>
            <div className='blog__head'>
                <div>
                    <h1>Blog AIO</h1>
                    <h2>We write about country houses, architecture, design, modern technologies in construction and design</h2>
                </div>
                <svg onClick={handleFocus} x="0px" y="0px" width="38.417px" height="18.592px" viewBox="0 0 38.417 18.592">
                    <g>
                        <path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path>
                    </g>
                </svg>
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
    )
}

export default BlogPage;