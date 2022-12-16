import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {additionalSlice} from "../../../store/reducers/AdditionalSlice";
import {useNavigate} from "react-router-dom";
import ReadFieldStr from "../../common/ReadFieldStr";
import ReadFieldBool from "../../common/ReadFieldBool";
import MyButton from "../../common/MyButton";


const AnamnesisReadOnly = () => {
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();

    const dispatch = useAppDispatch()
    return (

        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>Анамнез пациента режим чтения</h1>

            <div className='grid relative grid-cols-1 gap-y-3 my-4'>


                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/4"
                    label="Заболевания сердца и сосудов у родственников первой линии"
                    boolValue={SelectedPatient.anamnesis.disHeartBloodVesselsFirstLineRelatives}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/4"
                    label="Наличие соединительно-тканевой дисплазии у родственников"
                    boolValue={SelectedPatient.anamnesis.relativesConnTissDysplasia}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/4"
                    label="Принимает ли кроворазжижающие препараты"
                    boolValue={SelectedPatient.anamnesis.blodThinDrugs}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/4"
                    label="Принимает ли антиагреганты"
                    boolValue={SelectedPatient.anamnesis.disaggregants}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/4"
                    label="Наличие операций на сердце в прошлом"
                    boolValue={SelectedPatient.anamnesis.heartSurgeriesPr}
                />

                <ReadFieldStr
                    label="Тип операций на сердце в прошлом"
                    value={SelectedPatient.anamnesis.heartSurgeriesType}
                />

                <ReadFieldBool
                    label="Проходил ли генетический анализ"
                    boolValue={SelectedPatient.anamnesis.geneticAnalysisPr}
                />

                {
                    Boolean(SelectedPatient.anamnesis.geneticAnalysisPr) &&
                    <ReadFieldStr
                        label="Результаты генетического анализа"
                        value={SelectedPatient.anamnesis.geneticAnalysisRes}
                    />
                }

                <ReadFieldStr
                    label="Опыт курения"
                    value={`
                    ${SelectedPatient.anamnesis.smokingExperience === 0 ? ' Нет' : SelectedPatient.anamnesis.smokingExperience} 
                    ${SelectedPatient.anamnesis.smokingExperience % 10 === 1 ? ' год' : ''}
                    ${SelectedPatient.anamnesis.smokingExperience % 10 > 1 && SelectedPatient.anamnesis.smokingExperience % 10 <= 4 ? ' года' : ''}
                    ${SelectedPatient.anamnesis.smokingExperience % 10 > 4 ? ' лет' : ''}
                    ${SelectedPatient.anamnesis.smokingExperience % 10 === 0 && SelectedPatient.anamnesis.smokingExperience >= 10 ? ' лет' : ''}
                           `}
                />

                <ReadFieldStr
                    label="Опыт употребления алкоголя"
                    value={`
                    ${SelectedPatient.anamnesis.alkoConsumptionExperince === 0 ? ' Нет' : SelectedPatient.anamnesis.alkoConsumptionExperince} 
                    ${SelectedPatient.anamnesis.alkoConsumptionExperince % 10 === 1 ? ' год' : ''}
                    ${SelectedPatient.anamnesis.alkoConsumptionExperince % 10 > 1 && SelectedPatient.anamnesis.alkoConsumptionExperince % 10 <= 4 ? ' года' : ''}
                    ${SelectedPatient.anamnesis.alkoConsumptionExperince % 10 > 4 ? ' лет' : ''}
                    ${SelectedPatient.anamnesis.alkoConsumptionExperince % 10 === 0 && SelectedPatient.anamnesis.alkoConsumptionExperince >= 10 ? ' лет' : ''}
                            `}
                />

                <ReadFieldStr
                    label="Опыт употребления наркотиков"
                    value={`
                    ${SelectedPatient.anamnesis.drugConsumptionExperince === 0 ? ' Нет' : SelectedPatient.anamnesis.drugConsumptionExperince} 
                    ${SelectedPatient.anamnesis.drugConsumptionExperince % 10 === 1 ? ' год' : ''}
                    ${SelectedPatient.anamnesis.drugConsumptionExperince % 10 > 1 && SelectedPatient.anamnesis.drugConsumptionExperince % 10 <= 4 ? ' года' : ''}
                    ${SelectedPatient.anamnesis.drugConsumptionExperince % 10 > 4 ? ' лет' : ''}
                    ${SelectedPatient.anamnesis.drugConsumptionExperince % 10 === 0 && SelectedPatient.anamnesis.drugConsumptionExperince >= 10 ? ' лет' : ''}
                            `}
                />

                <ReadFieldStr
                    label="Профессиональные вредности"
                    value={SelectedPatient.anamnesis.occupationalHazards}
                />

                <ReadFieldStr
                    label="Занятие спортом"
                    value={SelectedPatient.anamnesis.sports}
                />

                <ReadFieldStr
                    label="Когда узнал о заболевании"
                    value={SelectedPatient.anamnesis.diseaseKnowledge}
                />

                <ReadFieldBool
                    label="Работает"
                    boolValue={SelectedPatient.anamnesis.employed}
                />

                <MyButton
                    onClick={()=>navigate(`edit`)}
                    className="w-1/5 absolute right-45 -bottom-16"
                >
                    Редактировать
                </MyButton>

            </div>


        </div>
    );
};

export default  AnamnesisReadOnly;