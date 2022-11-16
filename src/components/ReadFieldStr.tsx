import React from 'react';

interface Props {
    children?: React.ReactNode;
    divClassName?: string;
    spanClassName?: string;
    label: string;
    value: string;

}


/**
 * Кастомное поле.
 * value - выводимое значение.
 * label - название поля.
 */
const ReadFieldStr: React.FC<Props> = ({ children, divClassName, spanClassName,
                                           label, value } ) => {
    return (
        <div className={divClassName + ' flex'}>
            <span className={spanClassName + ' text-slate-400'}>{label}</span>
            <span className={spanClassName + ' text-slate-800'}>{value}</span>
        </div>
    );
}

export default ReadFieldStr;