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

                <div className="flex flex-row">
                    <span className="w-1/4 mr-6 font-semibold text-slate-800">Заболевания сердца и сосудов у родственников первой линии</span>

                    <EditFieldRadio
                        register={register("disHeartBloodVesselsFirstLineRelatives")}
                        defaultValue={Boolean(SelectedPatient.anamnesis.disHeartBloodVesselsFirstLineRelatives)}
                        value={1}
                        label="Да"
                        id="disHeartBloodVesselsFirstLineRelatives_true"
                        divClassName="w-1/4"
                    />

                    <EditFieldRadio
                        register={register("disHeartBloodVesselsFirstLineRelatives")}
                        defaultValue={!Boolean(SelectedPatient.anamnesis.disHeartBloodVesselsFirstLineRelatives)}
                        value={0}
                        label="Нет"
                        id="disHeartBloodVesselsFirstLineRelatives_false"
                        divClassName="w-1/4"
                    />
                </div>

                <div className="flex flex-row">
                    <span className="w-1/4 mr-6 font-semibold text-slate-800">Наличие соединительно-тканевой дисплазии у родстенников</span>

                    <EditFieldRadio
                        register={register("disHeartBloodVesselsFirstLineRelatives")}
                        defaultValue={Boolean(SelectedPatient.anamnesis.relativesConnTissDysplasia)}
                        value={1}
                        label="Да"
                        id="relativesConnTissDysplasia_true"
                        divClassName="w-1/4"
                    />

                    <EditFieldRadio
                        register={register("disHeartBloodVesselsFirstLineRelatives")}
                        defaultValue={!Boolean(SelectedPatient.anamnesis.relativesConnTissDysplasia)}
                        value={0}
                        label="Нет"
                        id="relativesConnTissDysplasia_false"
                        divClassName="w-1/4"
                    />
                </div>

                <div className="flex flex-row">
                    <span className="w-1/4 mr-6 font-semibold text-slate-800">Наличие операций на сердце в прошлом</span>

                    <EditFieldRadio
                        register={register("heartSurgeriesPr")}
                        defaultValue={Boolean(SelectedPatient.anamnesis.heartSurgeriesPr)}
                        value={1}
                        label="Да"
                        id="heartSurgeriesPr_true"
                        divClassName="w-1/4"
                    />

                    <EditFieldRadio
                        register={register("heartSurgeriesPr")}
                        defaultValue={!Boolean(SelectedPatient.anamnesis.heartSurgeriesPr)}
                        value={0}
                        label="Нет"
                        id="heartSurgeriesPr_false"
                        divClassName="w-1/4"
                    />
                </div>

                <EditFieldStr
                    label="Тип операций на сердце в прошлом"
                    defaultValue={SelectedPatient.anamnesis.heartSurgeriesType}
                    register={register("heartSurgeriesType")}
                    id="heartSurgeriesType"
                />

                <div className="flex flex-row">
                    <span className="w-1/4 mr-6 font-semibold text-slate-800">Проходил ли генетический анализ</span>

                    <EditFieldRadio
                        register={register("geneticAnalysisPr")}
                        defaultValue={Boolean(SelectedPatient.anamnesis.geneticAnalysisPr)}
                        value={1}
                        label="Да"
                        id="geneticAnalysisPr_true"
                        divClassName="w-1/4"
                    />

                    <EditFieldRadio
                        register={register("geneticAnalysisPr")}
                        defaultValue={!Boolean(SelectedPatient.anamnesis.geneticAnalysisPr)}
                        value={0}
                        label="Нет"
                        id="geneticAnalysisPr_false"
                        divClassName="w-1/4"
                    />
                </div>

                <EditFieldStr
                    label="Результаты генетического анализа"
                    defaultValue={SelectedPatient.anamnesis.geneticAnalysisRes}
                    register={register("geneticAnalysisRes")}
                    id="geneticAnalysisRes"
                />

                <div className="flex flex-row">
                    <span className="w-1/4 mr-6 font-semibold text-slate-800">Есть ли опыт курения</span>

                    <EditFieldRadio
                        register={register("smokingBool")}
                        defaultValue={Boolean(SelectedPatient.anamnesis.smokingBool)}
                        value={1}
                        label="Да"
                        id="smokingBool_true"
                        divClassName="w-1/4"
                    />

                    <EditFieldRadio
                        register={register("smokingBool")}
                        defaultValue={!Boolean(SelectedPatient.anamnesis.smokingBool)}
                        value={0}
                        label="Нет"
                        id="smokingBool_false"
                        divClassName="w-1/4"
                    />
                </div>

                <EditFieldStr
                    label="Опыт курения"
                    defaultValue={SelectedPatient.anamnesis.smokingExperience}
                    register={register("smokingExperience")}
                    id="smokingExperience"
                />

                <div className="flex flex-row">
                    <span className="w-1/4 mr-6 font-semibold text-slate-800">Есть ли опыт употребления алкоголя</span>

                    <EditFieldRadio
                        register={register("alkoConsumptionBool")}
                        defaultValue={Boolean(SelectedPatient.anamnesis.alkoConsumptionBool)}
                        value={1}
                        label="Да"
                        id="alkoConsumptionBool_true"
                        divClassName="w-1/4"
                    />

                    <EditFieldRadio
                        register={register("alkoConsumptionBool")}
                        defaultValue={!Boolean(SelectedPatient.anamnesis.alkoConsumptionBool)}
                        value={0}
                        label="Нет"
                        id="alkoConsumptionBool_false"
                        divClassName="w-1/4"
                    />
                </div>

                <EditFieldStr
                    label="Опыт употребления алкоголя"
                    defaultValue={SelectedPatient.anamnesis.alkoConsumptionExperince}
                    register={register("alkoConsumptionExperince")}
                    id="alkoConsumptionExperince"
                />

                <div className="flex flex-row">
                    <span className="w-1/4 mr-6 font-semibold text-slate-800">Есть ли опыт употребления наркотиков</span>

                    <EditFieldRadio
                        register={register("drugConsumptionBool")}
                        defaultValue={Boolean(SelectedPatient.anamnesis.drugConsumptionBool)}
                        value={1}
                        label="Да"
                        id="drugConsumptionBool_true"
                        divClassName="w-1/4"
                    />

                    <EditFieldRadio
                        register={register("drugConsumptionBool")}
                        defaultValue={!Boolean(SelectedPatient.anamnesis.drugConsumptionBool)}
                        value={0}
                        label="Нет"
                        id="drugConsumptionBool_false"
                        divClassName="w-1/4"
                    />
                </div>

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

                <div className="flex flex-row">
                    <span className="w-1/4 mr-6 font-semibold text-slate-800">Работает</span>

                    <EditFieldRadio
                        register={register("employed")}
                        defaultValue={Boolean(SelectedPatient.anamnesis.employed)}
                        value={1}
                        label="Да"
                        id="employed_true"
                        divClassName="w-1/4"
                    />

                    <EditFieldRadio
                        register={register("employed")}
                        defaultValue={!Boolean(SelectedPatient.anamnesis.employed)}
                        value={0}
                        label="Нет"
                        id="employed_false"
                        divClassName="w-1/4"
                    />
                </div>

                <div className="flex flex-row">
                    <span className="w-1/4 mr-6 font-semibold text-slate-800">Принимает ли кроворазжижающие препараты</span>

                    <EditFieldRadio
                        register={register("blodThinDrugs")}
                        defaultValue={Boolean(SelectedPatient.anamnesis.blodThinDrugs)}
                        value={1}
                        label="Да"
                        id="blodThinDrugs_true"
                        divClassName="w-1/4"
                    />

                    <EditFieldRadio
                        register={register("blodThinDrugs")}
                        defaultValue={!Boolean(SelectedPatient.anamnesis.blodThinDrugs)}
                        value={0}
                        label="Нет"
                        id="blodThinDrugs_false"
                        divClassName="w-1/4"
                    />
                </div>

                <div className="flex flex-row">
                    <span className="w-1/4 mr-6 font-semibold text-slate-800">Принимает ли антиагреганты</span>

                    <EditFieldRadio
                        register={register("disaggregants")}
                        defaultValue={Boolean(SelectedPatient.anamnesis.disaggregants)}
                        value={1}
                        label="Да"
                        id="disaggregants_true"
                        divClassName="w-1/4"
                    />

                    <EditFieldRadio
                        register={register("disaggregants")}
                        defaultValue={!Boolean(SelectedPatient.anamnesis.disaggregants)}
                        value={0}
                        label="Нет"
                        id="disaggregants_false"
                        divClassName="w-1/4"
                    />
                </div>


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