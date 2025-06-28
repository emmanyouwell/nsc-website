import React, {useState, useEffect} from 'react'
import {HashLink} from 'react-router-hash-link'
import '../import/css/default.css'
const ScrollTop = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    // Reads scroll value
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <HashLink smooth to="#">
        {/* If scroll Y is past 600, then the button will appear */}
        <div className={`scroll-top ${(scrollPosition>=300) && "active"}`}>
            <i className="fa fa-angle-up" aria-hidden="true"></i>
        </div>
        </HashLink>
    )
}

export default ScrollTop