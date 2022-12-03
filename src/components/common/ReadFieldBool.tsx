import React from 'react';


interface Props {
    children?: React.ReactNode;
    divClassName?: string;
    spanClassName?: string;

    label: string;
    boolValue: boolean | number;
    trueOption: string;
    falseOption: string;
}


/**
 * Кастомное поле.
 * trueOption выводится при boolValue = true;
 * falseOption выводится при boolValue = false;
 */
const ReadFieldBool: React.FC<Props> = ({ children, divClassName, spanClassName,
                                            label, boolValue, trueOption = "Да",
                                            falseOption = "Нет" } ) => {
    return (
        <div className={divClassName + ' flex'}>
            <span className={spanClassName + ' w-1/4 mr-6 font-semibold text-slate-800'}>{label}</span>
            {Boolean(boolValue) && <span className={spanClassName + ' w-1/2 py-2 pl-6 rounded-md bg-our-gray-main-theme font-semibold text-slate-600'}>{trueOption}</span>}
            {!Boolean(boolValue) && <span className={spanClassName + ' w-1/2 py-2 pl-6 rounded-md bg-our-gray-main-theme font-semibold text-slate-600'}>{falseOption}</span>}
        </div>
    );
}

export default ReadFieldBool;