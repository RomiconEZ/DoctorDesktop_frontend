import React from 'react';


interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
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
                "p-2 bg-transparent text-blue-600 font-semibold border border-blue-600 " +
                "rounded hover:bg-blue-600 hover:text-white hover:border-transparent " +
                "transition ease-in duration-200"
            }
        >
            {children}
        </button>
    );
}

export default MyButton;