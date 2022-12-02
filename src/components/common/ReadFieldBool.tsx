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
            <span className={spanClassName + ' w-1/4 mr-6'}>{label}</span>
            {boolValue && <span className={spanClassName + ' w-1/2 py-2 pl-6 rounded-md bg-gray-main-theme text-gray-non-active'}>{trueOption}</span>}
            {!boolValue && <span className={spanClassName + ' w-1/2 py-2 pl-6 rounded-md bg-gray-main-theme text-gray-non-active'}>{falseOption}</span>}
        </div>
    );
}

export default ReadFieldBool;