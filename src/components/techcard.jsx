import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../data";


const TechCard = () => {
    
    var settings = {
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
                }
            }
            ],
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
    };

    return (
        <Slider {...settings}>
            {/* tech item */}
            {data.technologies.map((tech, index) => {
                return (
                    <div key={index} className="col col-d-3 col-t-3 col-m-6 border-line-v">
                        <div className="fuct-item">
                            <div className="image">
                                <img src={tech.img} alt={tech.title} title={tech.title} className="tech-stack-imgs" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </Slider>
    );
};

export default TechCard;
