import React from 'react';
import Container from 'react-bootstrap/Container';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './HomeGallery.css'

class HomeGallery extends React.Component {
    render() {
        const settings = {
            dots: true,
            centerMode: true,
            centerPadding: 0,
            infinite: true,
            slidesToShow: 1,
            speed: 500,
            autoplay: true,
            arrows: true
        };
        // NB: All images must be of the same size or it will be a pain to adjust them properly
        return(
            <div className="container">
                <Slider {...settings}>
                <div>
                    <img src="https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg" />
                </div>
                <div>
                    <img src="https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg" />
                </div>
                <div>
                    <img src="https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg" />
                </div>
                <div>
                    <img src="https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg" />
                </div>
                </Slider>
            </div>
        );
    };
    
}

export default HomeGallery;