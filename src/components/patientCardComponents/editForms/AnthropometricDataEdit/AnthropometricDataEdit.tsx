import React from 'react';
import {useForm} from "react-hook-form";
import {useAppSelector} from "../../../../hooks/redux";
import {patientAPI} from "../../../../services/PatientService";
import {IPatientUpdate} from "../../../../models/IPatientUpdate";
import {useAppDispatch} from "../../../../store/store";
import {useNavigate, useParams} from "react-router-dom";
import EditFieldStr from "../../../common/EditFieldStr";
import EditFieldSelect from "../../../common/EditFieldSelect";
import EditFieldRadio from "../../../common/EditFieldRadio";
import MyButton from "../../../common/MyButton";
import {Clinics} from "../../../../DataLists/Clinics";
import {BodyTypeData} from "../../../../DataLists/BodyTypeData"
import EditFieldBool from "../../../common/EditFieldBool";


const AnthropometricDataEdit = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
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

    const onSubmit = async (data: any) => {
        const UpdatePatientData: IPatientUpdate = {
            patientID: SelectedPatient.patientID,
            employee_id: user!.id,
            anthropometric_data: {
                height: data.height, // рост
                weight: data.weight, // вес
                body_mass_index: data.body_mass_index, // индекс массы тела
                body_surface_area: data.body_surface_area, //площадь поверхности тела
                body_type: data.body_type, // тип тела // выбрать из списка
                connective_tissue_dysplasia: data.connective_tissue_dysplasia, // дисплазия соединительных тканей
                connective_tissue_dysplasia_Marfan: data.connective_tissue_dysplasia_Marfan, // синдром Марфана
                connective_tissue_dysplasia_EhlersDanlos: data.connective_tissue_dysplasia_EhlersDanlos, // синдром Элерса-Данло
                connective_tissue_dysplasia_LoeysDitz: data.connective_tissue_dysplasia_LoeysDitz, // синдром Лойеса-Дитц
                connective_tissue_dysplasia_Terner: data.connective_tissue_dysplasia_Terner, // синдром Тернера
                connective_tissue_dysplasia_Noonan: data.connective_tissue_dysplasia_Noonan, // синдром Нуана
            }
        }

        alert(JSON.stringify(data))
        //await updatePatient(UpdatePatientData)
        navigate(`/auth/menu/patients/${SelectedPatient.patientID}/anthropometric-data`)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='p-8 mb-16'>
                <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>Антропометрические данные
                    режим редактирования</h1>

                <div className='grid relative grid-cols-1 gap-y-3 my-4'>

                    <EditFieldStr
                        label="Рост"
                        defaultValue={SelectedPatient.anthropometric_data.height}
                        register={register("height")}
                        id="height"
                    />

                    <EditFieldStr
                        label="Вес"
                        defaultValue={SelectedPatient.anthropometric_data.weight}
                        register={register("weight")}
                        id="weight"
                    />

                    <EditFieldStr
                        label="Индекс массы тела"
                        defaultValue={SelectedPatient.anthropometric_data.body_mass_index}
                        register={register("body_mass_index")}
                        id="body_mass_index"
                    />

                    <EditFieldStr
                        label="Площадь поверхности тела"
                        defaultValue={SelectedPatient.anthropometric_data.body_surface_area}
                        register={register("body_surface_area")}
                        id="body_surface_area"
                    />

                    <EditFieldSelect
                        label="Телосложение"
                        defaultValue={SelectedPatient.anthropometric_data.body_type}
                        id={"body_type"}
                        listOfValues={BodyTypeData}
                        register={register("body_type")}
                    />

                    <EditFieldBool
                        register={register("connective_tissue_dysplasia")}
                        defaultValue={Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia)}
                        label="Дисплазия соединительных тканей"
                        id="connective_tissue_dysplasia"
                    />

                    <EditFieldBool
                        register={register("connective_tissue_dysplasia_Marfan")}
                        defaultValue={Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Marfan)}
                        label="Синдром Марфана"
                        id="connective_tissue_dysplasia_Marfan"
                    />

                    <EditFieldBool
                        register={register("connective_tissue_dysplasia_EhlersDanlos")}
                        defaultValue={Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia_EhlersDanlos)}
                        label="Синдром Элерса-Данло"
                        id="connective_tissue_dysplasia_EhlersDanlos"
                    />

                    <EditFieldBool
                        register={register("connective_tissue_dysplasia_LoeysDitz")}
                        defaultValue={Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia_LoeysDitz)}
                        label="Синдром Лойеса-Дитц"
                        id="connective_tissue_dysplasia_LoeysDitz"
                    />

                    <EditFieldBool
                        register={register("connective_tissue_dysplasia_Terner")}
                        defaultValue={Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Terner)}
                        label="Синдром Тернера"
                        id="connective_tissue_dysplasia_Terner"
                    />

                    <EditFieldBool
                        register={register("connective_tissue_dysplasia_Noonan")}
                        defaultValue={Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Noonan)}
                        label="Синдром Нуана"
                        id="connective_tissue_dysplasia_Noonan"
                    />

                    <MyButton
                        onClick={() => {
                            navigate(`/auth/menu/patients/${SelectedPatient.patientID}/anthropometric-data`)
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

export default AnthropometricDataEdit;