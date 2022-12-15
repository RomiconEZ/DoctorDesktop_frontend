import React from 'react';


interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    icon?: string;
}


//Кастомная кнопка.
//Описан только вид кнопки. Позицию описывайте в атрибуте className
const ButtonWithIcon: React.FC<Props> = ( { children, onClick, className, icon} ) =>
{
    return (

        <button
            onClick={onClick}
            className={ className +
                " group text-slate-400 hover:text-white font-semibold inline-flex items-center"
            }
        >
            <svg
                viewBox="0 0 24 24"
                className="mr-2 -ml-1 w-6 h-6 group-hover:stroke-our-greenish-500 stroke-current stroke-2"
            >
                <path d={icon} />
            </svg>

            {children}

        </button>
    );
}

export default ButtonWithIcon;