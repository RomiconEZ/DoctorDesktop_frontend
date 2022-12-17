import React from 'react';

import validatorConfig from './validatorConfig';
import {TextField, TextFieldProps} from "@mui/material";
import {useAppSelector} from "../../../../hooks/redux";

import {Form, useForm} from "../../../../hooks/useForm";
import {patientAPI} from "../../../../services/PatientService";
import {IPatientUpdate} from "../../../../models/IPatientUpdate";
import {useAppDispatch} from "../../../../store/store";
import {DatePickerField, InputField, RadioGroup} from "../../../common/Fields";
import Button from "../../../common/Button";
import {useNavigate, useParams} from "react-router-dom";
import {yesNo} from "../../../../DataLists/yesNo";
import {additionalSlice} from "../../../../store/reducers/AdditionalSlice";




const AnamnesisEdit = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();
    // const params = useParams<string>()
    const dispatch = useAppDispatch()
    let response: any



    const initialAnamnesis: any = {
        disHeartBloodVesselsFirstLineRelatives: SelectedPatient.anamnesis.disHeartBloodVesselsFirstLineRelatives,
        relativesConnTissDysplasia: SelectedPatient.anamnesis.relativesConnTissDysplasia,
        heartSurgeriesPr: SelectedPatient.anamnesis.heartSurgeriesPr,
        heartSurgeriesType: SelectedPatient.anamnesis.heartSurgeriesType,
        geneticAnalysisPr: SelectedPatient.anamnesis.geneticAnalysisPr,
        geneticAnalysisRes: SelectedPatient.anamnesis.geneticAnalysisRes,
        smokingBool: SelectedPatient.anamnesis.smokingBool,
        smokingExperience: SelectedPatient.anamnesis.smokingExperience,
        alkoConsumptionBool:SelectedPatient.anamnesis.alkoConsumptionBool,
        alkoConsumptionExperince:SelectedPatient.anamnesis.alkoConsumptionExperince,
        drugConsumptionBool:SelectedPatient.anamnesis.drugConsumptionBool,
        drugConsumptionExperince:SelectedPatient.anamnesis.drugConsumptionExperince,
        occupationalHazards: SelectedPatient.anamnesis.occupationalHazards,
        sports: SelectedPatient.anamnesis.sports,
        diseaseKnowledge:SelectedPatient.anamnesis.diseaseKnowledge,
        employed:SelectedPatient.anamnesis.employed,
        blodThinDrugs:SelectedPatient.anamnesis.blodThinDrugs,
        disaggregants:SelectedPatient.anamnesis.disaggregants,
    }
    const {data, errors, handleInputChange, handleKeyDown, validate} = useForm(initialAnamnesis, true, validatorConfig);
    const [updatePatient, {}] = patientAPI.useUpdatePatientMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    const handleUpdate = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (validate(data))
        {
            const UpdatePatientData: IPatientUpdate = {
                patientID: SelectedPatient.patientID,
                employee_id: user!.id,
                anamnesis: {
                    disHeartBloodVesselsFirstLineRelatives: data.disHeartBloodVesselsFirstLineRelatives,
                    relativesConnTissDysplasia: data.relativesConnTissDysplasia,
                    heartSurgeriesPr: data.heartSurgeriesPr,
                    heartSurgeriesType: data.heartSurgeriesType,
                    geneticAnalysisPr: data.geneticAnalysisPr,
                    geneticAnalysisRes: data.geneticAnalysisRes,
                    smokingBool: data.smokingBool,
                    smokingExperience: data.smokingExperience,
                    alkoConsumptionBool:data.alkoConsumptionBool,
                    alkoConsumptionExperince:data.alkoConsumptionExperince,
                    drugConsumptionBool:data.drugConsumptionBool,
                    drugConsumptionExperince:data.drugConsumptionExperince,
                    occupationalHazards: data.occupationalHazards,
                    sports: data.sports,
                    diseaseKnowledge:data.diseaseKnowledge,
                    employed:data.employed,
                    blodThinDrugs:data.blodThinDrugs,
                    disaggregants:data.disaggregants,

                }
            }
            response = await updatePatient(UpdatePatientData)
            if (response.data !== undefined) {
                dispatch(additionalSlice.actions.ChangeSelectedPatient(response.data))
            }
            navigate(`/auth/menu/patients/${SelectedPatient.patientID}/anamnesis`)

        }
    }
    return (
        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>Анамнез режим редактирования</h1>

            <div className='grid relative grid-cols-1 gap-y-3 my-4'>
        <Form data={data} errors={errors} handleChange={handleInputChange} handleKeyDown={handleKeyDown}>
            <InputField autoFocus name='disHeartBloodVesselsFirstLineRelatives' label='Заболевания сердца и сосудов у родственников первой линии'/>
            <RadioGroup name='relativesConnTissDysplasia' label='Наличие соединительно-тканевой дисплазии у родстенников' items={yesNo}/>
            <RadioGroup name='heartSurgeriesPr' label='Наличие операций на сердце в прошлом' items={yesNo}/>
            <InputField autoFocus name='heartSurgeriesType' label='Тип операций на сердце в прошлом'/>

            <RadioGroup name='geneticAnalysisPr' label='Проходил ли генетический анализ' items={yesNo}/>
            <InputField name='geneticAnalysisRes' label='Результаты генетического анализа'/>

            <RadioGroup name='smokingBool' label='Есть опыт курения' items={yesNo}/>
            <InputField name='smokingExperience' label='Опыт курения'/>

            <RadioGroup name='alkoConsumptionBool' label='Есть опыт употребления алкоголя' items={yesNo}/>
            <InputField name='alkoConsumptionExperince' label='Опыт употребления алкоголя'/>

            <RadioGroup name='drugConsumptionBool' label='Есть опыт употребления наркотиков' items={yesNo}/>
            <InputField name='drugConsumptionExperince' label='Опыт употребления наркотиков'/>

            <InputField name='occupationalHazards' label='Профессиональные вредности'/>
            <InputField name='sports' label='Занятие спортом'/>


            <DatePickerField
                value={data.personal_data?.birthday || 0}
                onChange={handleInputChange}
                openTo='year'
                mask='__.__.____'
                label='Когда узнал о заболевании'
                name='diseaseKnowledge'
                minDate={new Date('1900-01-01')}
                renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
                    <TextField {...params} {...(errors?.birthYear && { error: true, helperText: errors?.birthYear })} />
                )}
            />
            <RadioGroup name='employed' label='Работает' items={yesNo}/>
            <RadioGroup name='blodThinDrugs' label='Принимает ли кроворазжижающие препараты' items={yesNo}/>
            <RadioGroup name='disaggregants' label='Принимает ли дезагреганты' items={yesNo}/>



            <Button type='submit' onClick={handleUpdate} className="w-1/5 absolute right-34 -bottom-16" disabled={Object.keys(errors).length !== 0}>
                Сохранить
            </Button>
        </Form>
            </div>

        </div>
    );
};

export default AnamnesisEdit;