import React from 'react';


interface Props {
    children?: React.ReactNode;
    onClick?: any;
    className?: string;
    defaultStyle?: string
}


//Кастомная кнопка.
//Описан только вид кнопки. Позицию описывайте в атрибуте className
const MyButton: React.FC<Props> = ( { children, onClick, className,
                                        defaultStyle = "hover:bg-our-greenish-500 " +
                                        "bg-our-greenish-400 text-white hover:border-transparent" } ) => {
    return (
        <button
            onClick={onClick}
            className={
                className + " " + defaultStyle + " " +
                "p-2 font-semibold border rounded transition ease-in duration-200"
            }
        >
            {children}
        </button>
    );
}

export default MyButton;