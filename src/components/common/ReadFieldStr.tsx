import React from "react";

interface Props {
    children?: React.ReactNode;
    divClassName?: string;
    spanClassName?: string;
    label: string;
    value: string | number | Date;

}


/**
 * Кастомное поле.
 * value - выводимое значение.
 * label - название поля.
 */
const ReadFieldStr: React.FC<Props> = ({ children, divClassName,
                                           label, value, spanClassName } ) => {
    return (
        <div className={divClassName + ' flex'}>
            <span className={spanClassName + ' w-1/4 mr-6 font-semibold text-slate-800'}>{label}</span>
            <span className={spanClassName + ' w-1/2 py-2 pl-6 rounded-md bg-our-gray-main-theme font-semibold text-slate-600'}>{value}</span>
        </div>
    );
}

export default ReadFieldStr;