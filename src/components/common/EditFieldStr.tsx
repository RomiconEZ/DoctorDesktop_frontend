import React from "react";

interface Props {
    children?: React.ReactNode;
    divClassName?: string;
    inputClassName?: string;
    labelClassName?: string;
    register: {
        onChange?: any,
        onBlur?: any,
        name: string,
        ref?: any
    }
    label: string;
    defaultValue: string;
    id: string;
}


/**
 * Кастомное поле.
 * value - выводимое значение.
 * label - название поля.
 */
const EditFieldStr: React.FC<Props> = ({ children, id, defaultValue, divClassName, labelClassName,
                                           label, inputClassName, register } ) => {
    return (
        <div className={divClassName + ' flex'}>
            <label htmlFor={id}
                   className={labelClassName + ' w-1/4 mr-6 font-semibold text-slate-800'}
            >
                {label}
            </label>

            <input type="text" {...register} id={id} defaultValue={defaultValue}
                   className={inputClassName + " w-1/2 py-2 pl-6 rounded-md bg-our-gray-main-theme border font-semibold focus:bg-white focus:outline-none focus:border-our-greenish-300 text-slate-600"}
            />

        </div>
    );
}

export default EditFieldStr;