import React from "react";
import Slider from "react-slick";
import Slide, {ISliderContent} from "./Slide";
import {
    sliderContent_admin,
    sliderContent_codeveloper, sliderContent_dataadmin,
    sliderContent_developer,
    sliderContent_doctor, sliderContent_expert, sliderContent_registry
} from "./slider";
import { NextArrow, PrevArrow } from "./Arrows";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import {useAppSelector} from "../../../hooks/redux";

const Carousel = () => {

    const {user} = useAppSelector(state => state.userReducer) // достаем переменные из хранилища
    let sliderContent=sliderContent_doctor
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
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        cssEase: "linear",
        nextArrow: <NextArrow to="next" />,
        prevArrow: <PrevArrow to="prev" />,
        appendDots: (dots: string) => (
            <div className="bg-transparent !pb-[40px]">
                <ul> {dots} </ul>
            </div>
        ),
    };

    return (
        <div>
            <Slider {...settings}>
                {sliderContent.map((slideContent:ISliderContent) => { // итерация по страницам |  на одной странице 3 блока
                    return <Slide _Page={slideContent.page} key={slideContent.page} sliderContent={sliderContent} />;
                })}
            </Slider>
            <>
                {/*<div className="absolute top-1/2 right-4 md:right-3 lg:right-8 shadow-lg rounded-full bg-palette-card/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">*/}
                {/*    <HiOutlineChevronRight />*/}
                {/*</div>*/}
                {/*<div className="absolute top-1/2 left-4  md:left-3 lg:left-8 shadow-lg rounded-full bg-palette-card/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">*/}
                {/*    <HiOutlineChevronLeft />*/}
                {/*</div>*/}
            </>
        </div>
    );
};

export default Carousel;