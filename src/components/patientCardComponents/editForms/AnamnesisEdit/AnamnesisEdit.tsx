import React from 'react';

import {useAppSelector} from "../../../../hooks/redux";
import {useForm} from "react-hook-form";
import {patientAPI} from "../../../../services/PatientService";
import {IPatientUpdate} from "../../../../models/IPatientUpdate";
import {useAppDispatch} from "../../../../store/store";
import {useNavigate, useParams} from "react-router-dom";
import EditFieldStr from "../../../common/EditFieldStr";
import EditFieldSelect from "../../../common/EditFieldSelect";
import {Clinics} from "../../../../DataLists/Clinics";
import {Race} from "../../../../DataLists/Race";
import EditFieldRadio from "../../../common/EditFieldRadio";
import MyButton from "../../../common/MyButton";
import EditFieldBool from "../../../common/EditFieldBool";




const AnamnesisEdit = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();
    const params = useParams<string>()
    const dispatch = useAppDispatch()
    const {
        register,
        formState:{
            errors
        },
        handleSubmit

    } = useForm()


    const [updatePatient, {}] = patientAPI.useUpdatePatientMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    const onSubmit = async (data:any) => {

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
        alert(JSON.stringify(data))
        //await updatePatient(UpdatePatientData)
        navigate(`/auth/menu/patients/${SelectedPatient.patientID}/anamnesis`)
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>Анамнез пациента режим редактирования</h1>

            <div className='grid relative grid-cols-1 gap-y-3 my-4'>

                <EditFieldBool
                    register={register("disHeartBloodVesselsFirstLineRelatives")}
                    defaultValue={Boolean(SelectedPatient.anamnesis.disHeartBloodVesselsFirstLineRelatives)}
                    label="Заболевания сердца и сосудов у родственников первой линии"
                    id="disHeartBloodVesselsFirstLineRelatives"
                />

                <EditFieldBool
                    register={register("relativesConnTissDysplasia")}
                    defaultValue={Boolean(SelectedPatient.anamnesis.relativesConnTissDysplasia)}
                    label="Наличие соединительно-тканевой дисплазии у родстенников"
                    id="relativesConnTissDysplasia"
                />

                <EditFieldBool
                    register={register("heartSurgeriesPr")}
                    defaultValue={Boolean(SelectedPatient.anamnesis.heartSurgeriesPr)}
                    label="Наличие операций на сердце в прошлом"
                    id="heartSurgeriesPr"
                />

                <EditFieldStr
                    label="Тип операций на сердце в прошлом"
                    defaultValue={SelectedPatient.anamnesis.heartSurgeriesType}
                    register={register("heartSurgeriesType")}
                    id="heartSurgeriesType"
                />

                <EditFieldBool
                    register={register("geneticAnalysisPr")}
                    defaultValue={Boolean(SelectedPatient.anamnesis.geneticAnalysisPr)}
                    label="Проходил ли генетический анализ"
                    id="geneticAnalysisPr"
                />

                <EditFieldStr
                    label="Результаты генетического анализа"
                    defaultValue={SelectedPatient.anamnesis.geneticAnalysisRes}
                    register={register("geneticAnalysisRes")}
                    id="geneticAnalysisRes"
                />

                <EditFieldBool
                    register={register("smokingBool")}
                    defaultValue={Boolean(SelectedPatient.anamnesis.smokingBool)}
                    label="Есть ли опыт курения"
                    id="smokingBool"
                />

                <EditFieldStr
                    label="Опыт курения"
                    defaultValue={SelectedPatient.anamnesis.smokingExperience}
                    register={register("smokingExperience")}
                    id="smokingExperience"
                />

                <EditFieldBool
                    register={register("alkoConsumptionBool")}
                    defaultValue={Boolean(SelectedPatient.anamnesis.alkoConsumptionBool)}
                    label="Есть ли опыт употребления алкоголя"
                    id="alkoConsumptionBool"
                />

                <EditFieldStr
                    label="Опыт употребления алкоголя"
                    defaultValue={SelectedPatient.anamnesis.alkoConsumptionExperince}
                    register={register("alkoConsumptionExperince")}
                    id="alkoConsumptionExperince"
                />

                <EditFieldBool
                    register={register("drugConsumptionBool")}
                    defaultValue={Boolean(SelectedPatient.anamnesis.drugConsumptionBool)}
                    label="Есть ли опыт употребления наркотиков"
                    id="drugConsumptionBool"
                />

                <EditFieldStr
                    label="Опыт употребления наркотиков"
                    defaultValue={SelectedPatient.anamnesis.drugConsumptionExperince}
                    register={register("drugConsumptionExperince")}
                    id="drugConsumptionExperince"
                />

                <EditFieldStr
                    label="Профессиональные вредности"
                    defaultValue={SelectedPatient.anamnesis.occupationalHazards}
                    register={register("occupationalHazards")}
                    id="occupationalHazards"
                />

                <EditFieldStr
                    label="Занятие спортом"
                    defaultValue={SelectedPatient.anamnesis.sports}
                    register={register("sports")}
                    id="sports"
                />

                <EditFieldStr
                    label="Когда узнал о заболевании"
                    inputType="date"
                    defaultValue={String(SelectedPatient.anamnesis.diseaseKnowledge)}
                    register={register("diseaseKnowledge")}
                    id="diseaseKnowledge"
                />

                <EditFieldBool
                    register={register("employed")}
                    defaultValue={Boolean(SelectedPatient.anamnesis.employed)}
                    label="Работает"
                    id="employed"
                />

                <EditFieldBool
                    register={register("blodThinDrugs")}
                    defaultValue={Boolean(SelectedPatient.anamnesis.blodThinDrugs)}
                    label="Принимает ли кроворазжижающие препараты"
                    id="blodThinDrugs"
                />

                <EditFieldBool
                    register={register("disaggregants")}
                    defaultValue={Boolean(SelectedPatient.anamnesis.disaggregants)}
                    label="Принимает ли антиагреганты"
                    id="disaggregants"
                />


                <MyButton
                    onClick={() => {navigate(`/auth/menu/patients/${SelectedPatient.patientID}/anamnesis`)}}
                    className="w-1/5 absolute left-0 -bottom-20"
                    defaultStyle=" border-gray-500 text-gray-500 hover:bg-gray-700 hover:text-white"
                >
                    <div className="border-gray-500"></div>
                    Отменить
                </MyButton>

                <MyButton
                    onClick={handleSubmit(onSubmit)}
                    className="w-1/5 absolute right-44 -bottom-20"
                >
                    Сохранить
                </MyButton>



            </div>

        </div>
    </form>

);
};

export default AnamnesisEdit;