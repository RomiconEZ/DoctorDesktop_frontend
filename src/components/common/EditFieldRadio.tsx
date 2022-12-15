import React from "react";

interface Props {
    divClassName?: string;
    labelClassName?: string;
    register: {
        onChange?: any,
        onBlur?: any,
        name: string,
        ref?: any
    }
    defaultValue: boolean;
    value: number;
    label: string;
    id: string;

}


const EditFieldRadio: React.FC<Props> = ({ id, divClassName, labelClassName,
                                           label, register, value, defaultValue} ) => {
    return (
            <div className={"flex items-center pl-4 rounded bg-our-gray-main-theme border border-gray-200 focus:border focus:border-our-greenish-500 " + divClassName}>
                <input className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-our-greenish-500 focus:ring-2"
                       {...register}
                       type="radio"
                       id={id}
                       value={value}
                       defaultChecked={defaultValue}
                />
                <label className={labelClassName + " py-4 ml-2 w-full text-sm font-medium text-gray-900"}
                       htmlFor={id}
                >
                    {label}
                </label>
            </div>
    );
}

export default EditFieldRadio;