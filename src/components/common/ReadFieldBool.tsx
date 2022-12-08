import React from 'react';


interface Props {
    children?: React.ReactNode;
    divClassName?: string;
    labelClassName?: string;
    valueClassName?: string;
    label: string;
    boolValue: boolean | number | string;
    trueOption?: string;
    falseOption?: string;
}


/**
 * Кастомное поле.
 * trueOption выводится при boolValue = true;
 * falseOption выводится при boolValue = false;
 */
const ReadFieldBool: React.FC<Props> = ({ children, divClassName , labelClassName = "w-1/4" ,
                                            label, boolValue, trueOption = "Да",
                                            falseOption = "Нет", valueClassName = "w-1/2" } ) => {
    return (
        <div className={divClassName + ' flex'}>
            <span className={'mr-6 font-semibold text-slate-800 ' + labelClassName}>{label}</span>
            {Boolean(boolValue) && <span className={'py-2 pl-6 rounded-md bg-our-gray-main-theme font-semibold text-slate-600 ' + valueClassName}>{trueOption}</span>}
            {!Boolean(boolValue) && <span className={'py-2 pl-6 rounded-md bg-our-gray-main-theme font-semibold text-slate-600 ' + valueClassName}>{falseOption}</span>}
        </div>
    );
}

export default ReadFieldBool;