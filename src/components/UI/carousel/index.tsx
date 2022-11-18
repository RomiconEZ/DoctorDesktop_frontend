import React from "react";
import Slider from "react-slick";
import {
    sliderContent_admin,
    sliderContent_codeveloper, sliderContent_dataadmin,
    sliderContent_developer,
    sliderContent_doctor, sliderContent_expert, sliderContent_registry
} from "./slider";
import { NextArrow, PrevArrow } from "./Arrows";
import {useAppSelector} from "../../../hooks/redux";
import {NavLink} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface ISlideContent {
    title: string;
    sections: linkName[];
    id: number;

}
export interface linkName {
    name: string;
    to: string;
}

const Carousel = () => {

    const {user} = useAppSelector(state => state.userReducer) // достаем переменные из хранилища

    let sliderContent: ISlideContent[]=sliderContent_doctor
    switch(user?.role) {
        case 1: {
            sliderContent=sliderContent_doctor;
            break;
        }
        case 2: {
            sliderContent=sliderContent_developer;
            break;
        }
        case 3: {
            sliderContent=sliderContent_codeveloper;
            break;
        }
        case 4: {
            sliderContent=sliderContent_admin;
            break;
        }
        case 5: {
            sliderContent=sliderContent_registry;
            break;
        }
        case 6: {
            sliderContent=sliderContent_expert;
            break;
        }
        case 7: {
            sliderContent=sliderContent_dataadmin;

            break;
        }
        default: {
            break;
        }
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,

        // nextArrow: <NextArrow to="next" />,
        // prevArrow: <PrevArrow to="prev" />,
        // appendDots: (dots: string) => (
        //     <div className="bg-transparent !pb-[40px]">
        //         <ul> {dots} </ul>
        //     </div>
        // ),
    };

    return (
        <div>
            <Slider {...settings}>

                {sliderContent.map((slideContent:ISlideContent) => {
                    return <div>
                            <h2>{slideContent.title}</h2>
                            {slideContent.sections.map((linkContent: linkName) => {
                                return <NavLink to={linkContent.to}>
                                        {linkContent.name}
                                    </NavLink>


                            })}

                        </div>
                })}


            </Slider>
        </div>
    );
};

export default Carousel;