import React from "react";
import {
    sliderContent_admin,
    sliderContent_codeveloper, sliderContent_dataadmin, sliderContent_demo,
    sliderContent_developer,
    sliderContent_doctor, sliderContent_expert, sliderContent_registry
} from "./slider";
import {useAppSelector} from "../../../hooks/redux";
import {NavLink} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from "./Arrows";
import ButtonWithIcon from "../../common/ButtonWithIcon";
import {arrowRightIcon} from "../../common/icons";

export interface ISlideContent {
    title: string;
    sections: linkName[];
    id: number;

}
export interface linkName {
    name: string;
    to: string;
    id: number;
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
        case 0: {
            sliderContent=sliderContent_demo;
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
        slidesToScroll: 1,
        autoplay: false,

        nextArrow: <NextArrow to="next" />,
        prevArrow: <PrevArrow to="prev" />,
    };

    return (
        <div className="flex flex-row justify-center gap-x-16 mt-44">

            {sliderContent.map((slideContent:ISlideContent) => {
                return <div key={slideContent.id}>
                    <div className="bg-white rounded-md pt-10 pb-5 px-5 h-72 w-72">
                        <h2 className="text-our-greenish-300 font-medium uppercase text-2xl mb-6">{slideContent.title}</h2>
                        {slideContent.sections.map((linkContent: linkName) => {
                            return <div key={linkContent.id} className="">
                                <ButtonWithIcon
                                    icon = {arrowRightIcon}
                                    className="hover:text-our-greenish-400"
                                >
                                    <NavLink to={linkContent.to}>
                                        {linkContent.name}
                                    </NavLink>
                                </ButtonWithIcon>
                            </div>
                        })}
                    </div>

                </div>
            })}

        </div>
    );
};

export default Carousel;