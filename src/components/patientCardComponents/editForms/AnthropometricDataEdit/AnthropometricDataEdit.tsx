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


    const initialAnthropometricData: any = {
        height: SelectedPatient.anthropometric_data.height, // рост
        weight: SelectedPatient.anthropometric_data.weight, // вес
        body_mass_index: SelectedPatient.anthropometric_data.body_mass_index, // индекс массы тела
        body_surface_area: SelectedPatient.anthropometric_data.body_surface_area, //площадь поверхности тела
        body_type: SelectedPatient.anthropometric_data.body_type, // тип тела // выбрать из списка
        connective_tissue_dysplasia: SelectedPatient.anthropometric_data.connective_tissue_dysplasia, // дисплазия соединительных тканей
        connective_tissue_dysplasia_Marfan: SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Marfan, // синдром Марфана
        connective_tissue_dysplasia_EhlersDanlos: SelectedPatient.anthropometric_data.connective_tissue_dysplasia_EhlersDanlos, // синдром Элерса-Данло
        connective_tissue_dysplasia_LoeysDitz: SelectedPatient.anthropometric_data.connective_tissue_dysplasia_LoeysDitz, // синдром Лойеса-Дитц
        connective_tissue_dysplasia_Terner: SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Terner, // синдром Тернера
        connective_tissue_dysplasia_Noonan: SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Noonan, // синдром Нуана
    }

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
                        listOfValues={Clinics}
                        register={register("body_type")}
                    />

                    <div className="flex flex-row">
                        <span className="w-1/4 mr-6 font-semibold text-slate-800">Дисплазия соединительных тканей</span>

                        <EditFieldRadio
                            register={register("connective_tissue_dysplasia")}
                            defaultValue={Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia)}
                            value={1}
                            label="Да"
                            id="connective_tissue_dysplasia_true"
                            divClassName="w-1/4"
                        />

                        <EditFieldRadio
                            register={register("connective_tissue_dysplasia")}
                            defaultValue={!Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia)}
                            value={0}
                            label="Нет"
                            id="connective_tissue_dysplasia_false"
                            divClassName="w-1/4"
                        />
                    </div>


                    <div className="flex flex-row">
                        <span className="w-1/4 mr-6 font-semibold text-slate-800">Синдром Марфана</span>

                        <EditFieldRadio
                            register={register("connective_tissue_dysplasia_Marfan")}
                            defaultValue={Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Marfan)}
                            value={1}
                            label="Да"
                            id="connective_tissue_dysplasia_Marfan_true"
                            divClassName="w-1/4"
                        />

                        <EditFieldRadio
                            register={register("connective_tissue_dysplasia_Marfan")}
                            defaultValue={!Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Marfan)}
                            value={0}
                            label="Нет"
                            id="connective_tissue_dysplasia_Marfan_false"
                            divClassName="w-1/4"
                        />
                    </div>

                    <div className="flex flex-row">
                        <span className="w-1/4 mr-6 font-semibold text-slate-800">Синдром Элерса-Данло</span>

                        <EditFieldRadio
                            register={register("connective_tissue_dysplasia_EhlersDanlos")}
                            defaultValue={Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia_EhlersDanlos)}
                            value={1}
                            label="Да"
                            id="connective_tissue_dysplasia_EhlersDanlos_true"
                            divClassName="w-1/4"
                        />

                        <EditFieldRadio
                            register={register("connective_tissue_dysplasia_EhlersDanlos")}
                            defaultValue={!Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia_EhlersDanlos)}
                            value={0}
                            label="Нет"
                            id="connective_tissue_dysplasia_EhlersDanlos_false"
                            divClassName="w-1/4"
                        />
                    </div>

                    <div className="flex flex-row">
                        <span className="w-1/4 mr-6 font-semibold text-slate-800">Синдром Лойеса-Дитц</span>

                        <EditFieldRadio
                            register={register("connective_tissue_dysplasia_LoeysDitz")}
                            defaultValue={Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia_LoeysDitz)}
                            value={1}
                            label="Да"
                            id="connective_tissue_dysplasia_LoeysDitz_true"
                            divClassName="w-1/4"
                        />

                        <EditFieldRadio
                            register={register("connective_tissue_dysplasia_LoeysDitz")}
                            defaultValue={!Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia_LoeysDitz)}
                            value={0}
                            label="Нет"
                            id="connective_tissue_dysplasia_LoeysDitz_false"
                            divClassName="w-1/4"
                        />
                    </div>

                    <div className="flex flex-row">
                        <span className="w-1/4 mr-6 font-semibold text-slate-800">Синдром Тернера</span>

                        <EditFieldRadio
                            register={register("connective_tissue_dysplasia_Terner")}
                            defaultValue={Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Terner)}
                            value={1}
                            label="Да"
                            id="connective_tissue_dysplasia_Terner_true"
                            divClassName="w-1/4"
                        />

                        <EditFieldRadio
                            register={register("connective_tissue_dysplasia_Terner")}
                            defaultValue={!Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Terner)}
                            value={0}
                            label="Нет"
                            id="connective_tissue_dysplasia_Terner_false"
                            divClassName="w-1/4"
                        />
                    </div>

                    <div className="flex flex-row">
                        <span className="w-1/4 mr-6 font-semibold text-slate-800">Синдром Нуана</span>

                        <EditFieldRadio
                            register={register("connective_tissue_dysplasia_Noonan")}
                            defaultValue={Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Noonan)}
                            value={1}
                            label="Да"
                            id="connective_tissue_dysplasia_Noonan_true"
                            divClassName="w-1/4"
                        />

                        <EditFieldRadio
                            register={register("connective_tissue_dysplasia_Noonan")}
                            defaultValue={!Boolean(SelectedPatient.anthropometric_data.connective_tissue_dysplasia_Noonan)}
                            value={0}
                            label="Нет"
                            id="connective_tissue_dysplasia_Noonan_false"
                            divClassName="w-1/4"
                        />
                    </div>

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