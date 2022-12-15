import React from "react";

interface Props {
    divClassName?: string;
    labelClassName?: string;
    label: string;
    defaultValue: string;
    id: string;
    listOfValues: Array<string>;
    register: {
        onChange?: any,
        onBlur?: any,
        name: string,
        ref?: any
    }
}

const EditFieldSelect: React.FC<Props> = ({ id, defaultValue, divClassName, labelClassName,
                                           label, register, listOfValues} ) => {
    return (
        <div className={divClassName + ' flex'}>

            <label
                htmlFor={id}
                className={labelClassName + " w-1/4 mr-6 font-semibold text-slate-800"}
            >
                {label}
            </label>
            <select
                {...register}
                id={id}
                className="w-1/2 py-2 pl-6 rounded-md bg-our-gray-main-theme border font-semibold
                    focus:bg-white focus:outline-none focus:border-our-greenish-300 text-slate-600"
            >
                <option selected>{defaultValue}</option>
                {listOfValues.map((item, i)=>{
                    if (item!==defaultValue) {
                        return (<option value={item}>{item}</option>)
                    }
                })}


            </select>


        </div>



    );
}

export default EditFieldSelect;