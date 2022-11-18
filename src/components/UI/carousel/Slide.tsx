import React from "react";
import {NavLink} from 'react-router-dom';

interface Props {
    _Page: number;
    sliderContent: any;
}


const Slide: React.FC<Props> = ({ _Page, sliderContent}) => {

    return (
        <>
            <div className={`relative w-[100%] h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat`}>
                {sliderContent.map((slideContent: { body: { sections: any[]; }; }) =>
                {
                    // Итерируемся по всем блокам с такой страницей
                    // Вывод будет осуществляться в соответствии с порядком расположения в slider.js
                    return  <>
                    if (slideContent.page == _Page)
                    {
                        // Возвращаем одну из секций | на одной странице их 3
                            <div>
                                {slideContent.body.sections.map((sectionContent) =>
                                {  // Возвращаем линк на какой-нибудь раздел
                                    return <NavLink to={sectionContent.to}>
                                        ${sectionContent.name}
                                    </NavLink>
                                })}
                            </div>
                    }
                    </>

                })}
            </div>
        </>
    );
};

export default Slide;