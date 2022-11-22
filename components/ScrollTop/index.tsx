import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

import ScrollTopStyle from './style';

const ScrollTop = () => {
    const [showButton, setShowButton] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
        {
            showButton ?
            <div className='scroll-container' onClick={scrollToTop}>
                <FontAwesomeIcon className='scroll-icon' icon={faAngleDoubleUp}/>
            </div>
            : ''
        }
            <style jsx>
                {ScrollTopStyle}
            </style>
        </>
    )
}

export default ScrollTop;