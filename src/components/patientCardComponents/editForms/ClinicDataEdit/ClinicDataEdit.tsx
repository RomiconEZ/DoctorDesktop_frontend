import React from 'react';
import {useForm} from "react-hook-form";
import {TextField, TextFieldProps} from "@mui/material";
import {useAppSelector} from "../../../../hooks/redux";
import {additionalSlice} from "../../../../store/reducers/AdditionalSlice";
import {patientAPI} from "../../../../services/PatientService";
import {IPatientUpdate} from "../../../../models/IPatientUpdate";
import {useAppDispatch} from "../../../../store/store";
import {useNavigate, useParams} from "react-router-dom";
import EditFieldStr from "../../../common/EditFieldStr";
import EditFieldSelect from "../../../common/EditFieldSelect";
import {PatientStates} from "../../../../DataLists/PatientStateData";
import EditFieldRadio from "../../../common/EditFieldRadio";
import MyButton from "../../../common/MyButton";
import EditFieldBool from "../../../common/EditFieldBool";


const ClinicDataEdit = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const {SelectedPatient} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();
    const params = useParams<string>()
    const dispatch = useAppDispatch()

    const {
        register,
        formState: {
            errors
        },
        handleSubmit

    } = useForm()


    const [updatePatient, {}] = patientAPI.useUpdatePatientMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    const onSubmit = async (data:any) => {
        const UpdatePatientData: IPatientUpdate = {
            patientID: SelectedPatient.patientID,
            employee_id: user!.id,
            clinical_data: {
                main_diag: data.main_diag, // основной диагноз
                aortic_dissection: data.aortic_dissection, // наличие расслоения аорты
                intramural_hematoma: data.intramural_hematoma, // наличие интрамуральной гематомы
                aortic_rupture: data.aortic_rupture, // наличие разрыва аорты
                patient_state: data.patient_state, // стабильное/нестабильное состояние
                pain_beh_stern: data.pain_beh_stern, // боли за грудиной
                interscap_reg_pain: data.interscap_reg_pain, // боли в межлопаточной области
                conscious_loss: data.conscious_loss, // потеря сознания
                low_extrem_ischemia: data.low_extrem_ischemia, // ишемия нижних конечностей
            }
        }
        alert(JSON.stringify(data))
        //await updatePatient(UpdatePatientData)
        navigate(`/auth/menu/patients/${SelectedPatient.patientID}/clinic-data`)
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>Клинические данные режим редактирования</h1>

            <div className='grid relative grid-cols-1 gap-y-3 my-4'>

                <EditFieldStr
                    label="Основной диагноз"
                    defaultValue={SelectedPatient.clinical_data.main_diag}
                    register={register("main_diag")}
                    id="main_diag"
                />

                <EditFieldSelect
                    label="Состояние"
                    defaultValue={SelectedPatient.clinical_data.patient_state}
                    id="patient_state"
                    listOfValues={PatientStates}
                    register={register("patient_state")}
                />

                <EditFieldBool
                    register={register("aortic_dissection")}
                    defaultValue={Boolean(SelectedPatient.clinical_data.aortic_dissection)}
                    label="Наличие расслоения аорты"
                    id="aortic_dissection"
                />

                <EditFieldBool
                    register={register("intramural_hematoma")}
                    defaultValue={Boolean(SelectedPatient.clinical_data.intramural_hematoma)}
                    label="Наличие интрамуральной гематомы"
                    id="intramural_hematoma"
                />

                <EditFieldBool
                    register={register("aortic_rupture")}
                    defaultValue={Boolean(SelectedPatient.clinical_data.aortic_rupture)}
                    label="Наличие разрыва аорты"
                    id="aortic_rupture"
                />

                <EditFieldBool
                    register={register("pain_beh_stern")}
                    defaultValue={Boolean(SelectedPatient.clinical_data.pain_beh_stern)}
                    label="Боли за грудиной"
                    id="pain_beh_stern"
                />

                <EditFieldBool
                    register={register("interscap_reg_pain")}
                    defaultValue={Boolean(SelectedPatient.clinical_data.interscap_reg_pain)}
                    label="Боли в межлопаточной области"
                    id="interscap_reg_pain"
                />

                <EditFieldBool
                    register={register("conscious_loss")}
                    defaultValue={Boolean(SelectedPatient.clinical_data.conscious_loss)}
                    label="Потеря сознания"
                    id="conscious_loss"
                />

                <EditFieldBool
                    register={register("low_extrem_ischemia")}
                    defaultValue={Boolean(SelectedPatient.clinical_data.low_extrem_ischemia)}
                    label="Ишемия нижних конечностей"
                    id="low_extrem_ischemia"
                />

                <MyButton
                    onClick={() => {
                        navigate(`/auth/menu/patients/${SelectedPatient.patientID}/clinic-data`)
                    }}
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

export default ClinicDataEdit;