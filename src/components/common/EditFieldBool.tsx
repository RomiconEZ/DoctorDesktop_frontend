import React from "react";
import EditFieldRadio from "./EditFieldRadio";

interface Props {
    register: {
        onChange?: any,
        onBlur?: any,
        name: string,
        ref?: any
    }
    defaultValue: boolean;
    label: string;
    label_true?: string;
    label_false?: string;
    id: string;

}

//Просто две объединенные EditFieldRadio
const EditFieldBool: React.FC<Props> = ({label, register, defaultValue, id,
                                            label_true = "Да", label_false = "Нет"} ) => {
    return (
        <div className="flex flex-row">
            <span className="w-1/4 mr-6 font-semibold text-slate-800">{label}</span>

            <EditFieldRadio
                register={register}
                defaultValue={defaultValue}
                value={1}
                label={label_true}
                id={id + "_true"}
                divClassName="w-1/4"
            />

            <EditFieldRadio
                register={register}
                defaultValue={!defaultValue}
                value={0}
                label={label_false}
                id={id + "_false"}
                divClassName="w-1/4"
            />
        </div>
    );
}

export default EditFieldBool;