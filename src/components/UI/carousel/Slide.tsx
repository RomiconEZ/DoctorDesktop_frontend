import React from "react";
import {NavLink} from 'react-router-dom';

interface Props {
    _Page: number;
    sliderContent: ISliderContent[];
}

export interface ISliderContent {
    page: number;
    body: IBlokContent[];

}
export interface IBlokContent {
    title: string;
    sections: linkName[];
    id: number;

}
export interface linkName {
    name: string;
    to: string;
    id: number;
}

const Slide: React.FC<Props> = ({ _Page, sliderContent}) => {

    return (
        <div>
                {sliderContent.map((slideContent: ISliderContent) =>
                {
                    if (slideContent.page == _Page) {
                        return <div>
                                {slideContent.body.map((blokContent: IBlokContent) => {
                                    return <div>
                                        <h2>{blokContent.title}</h2>
                                        {blokContent.sections.map((SectionContent: linkName) => {
                                            return <NavLink to={SectionContent.to}>
                                                {SectionContent.name}
                                            </NavLink>

                                        })}
                                    </div>

                                })}
                        </div>
                    }

                })}
            </div>
    );
};

export default Slide;