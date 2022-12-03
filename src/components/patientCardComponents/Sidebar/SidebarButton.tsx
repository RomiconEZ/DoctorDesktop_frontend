import React from 'react';


interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    icon?: string;
}


//Кастомная кнопка.
//Описан только вид кнопки. Позицию описывайте в атрибуте className
const SidebarButton: React.FC<Props> = ( { children, onClick, className, icon} ) =>
{
    return (

        <button
            onClick={onClick}
            className={ className +
                " group text-slate-400 hover:text-white font-semibold inline-flex items-center"
            }
        >
            {children}
        </button>
    );
}

export default SidebarButton;