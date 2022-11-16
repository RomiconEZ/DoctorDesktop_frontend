import React from 'react';


interface Props {
    children?: React.ReactNode;
    divClassName?: string;
    spanClassName?: string;
    label: string;
    boolValue: boolean;
    trueOption: string;
    falseOption: string;
}


/**
 * Кастомное поле.
 * trueOption выводится при boolValue = true;
 * falseOption выводится при boolValue = false;
 */
const ReadFieldBool: React.FC<Props> = ({ children, divClassName, spanClassName,
                                            label, boolValue, trueOption = "Да", falseOption = "Нет" } ) => {
    return (
        <div className={divClassName + ' flex'}>
            <span className={spanClassName + ' text-slate-400'}>{label}</span>
            {boolValue && <span className={spanClassName + ' text-slate-800'}>{trueOption}</span>}
            {!boolValue && <span className={spanClassName + ' text-slate-800'}>{falseOption}</span>}
        </div>
    );
}

export default ReadFieldBool;