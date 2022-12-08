import React from 'react';


interface Props {
    children?: React.ReactNode;
    onClick?: any;
    className?: string;
}


//Кастомная кнопка.
//Описан только вид кнопки. Позицию описывайте в атрибуте className
const MyButton: React.FC<Props> = ( { children, onClick, className } ) => {
    return (
        <button
            onClick={onClick}
            className={
                className + " " +
                "p-2 bg-transparent text-our-greenish-500 font-semibold border border-our-greenish-500 " +
                "rounded hover:bg-our-greenish-500 hover:text-white hover:border-transparent " +
                "transition ease-in duration-200"
            }
        >
            {children}
        </button>
    );
}

export default MyButton;