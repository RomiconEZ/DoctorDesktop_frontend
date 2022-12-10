import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {additionalSlice} from "../../../store/reducers/AdditionalSlice";
import {useNavigate} from "react-router-dom";
import ReadFieldStr from "../../common/ReadFieldStr";
import ReadFieldBool from "../../common/ReadFieldBool";
import MyButton from "../../common/MyButton";


const AnthropometricDataReadOnly = () => {
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();

    const dispatch = useAppDispatch()
    return (

        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>Антропометрические данные режим чтения</h1>

            <div className='grid relative grid-cols-1 gap-y-3 my-4'>

                <ReadFieldStr
                    label="Рост"
                    value={SelectedPatient.anthropometric_data.height}
                />

                <ReadFieldStr
                    label="Вес"
                    value={SelectedPatient.anthropometric_data.weight}
                />

                <ReadFieldStr
                    label="Индекс массы тела"
                    value={SelectedPatient.anthropometric_data.body_mass_index}
                />

                <ReadFieldStr
                    label="Площадь поверхности тела"
                    value={SelectedPatient.anthropometric_data.body_surface_area}
                />

                <ReadFieldStr
                    label="Телосложение"
                    value={SelectedPatient.anthropometric_data.body_type}
                />

                <ReadFieldBool
                    labelClassName="w-1/4"
                    valueClassName="w-1/2"
                    label="Дисплазия соединительных тканей"
                    boolValue={SelectedPatient.anthropometric_data.connective_tissue_dysplasia}
                />

                <ReadFieldBool
                    labelClassName="w-1/4"
                    valueClassName="w-1/2"
                    label="Синдром Марфана"
                    boolValue={SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Marfan}
                />

                <ReadFieldBool
                    labelClassName="w-1/4"
                    valueClassName="w-1/2"
                    label="Синдром Элерса-Данло"
                    boolValue={SelectedPatient.anthropometric_data.connective_tissue_dysplasia_EhlersDanlos}
                />

                <ReadFieldBool
                    labelClassName="w-1/4"
                    valueClassName="w-1/2"
                    label="Синдром Лойеса-Дитц"
                    boolValue={SelectedPatient.anthropometric_data.connective_tissue_dysplasia_LoeysDitz}
                />

                <ReadFieldBool
                    labelClassName="w-1/4"
                    valueClassName="w-1/2"
                    label="Синдром Тернера"
                    boolValue={SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Terner}
                />

                <ReadFieldBool
                    labelClassName="w-1/4"
                    valueClassName="w-1/2"
                    label="Синдром Нуана"
                    boolValue={SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Noonan}
                />

                <MyButton
                    onClick={()=>navigate(`edit`)}
                    className="w-1/5 absolute right-44 -bottom-16"
                >
                    Редактировать
                </MyButton>

            </div>

        </div>
    );
};

export default AnthropometricDataReadOnly;