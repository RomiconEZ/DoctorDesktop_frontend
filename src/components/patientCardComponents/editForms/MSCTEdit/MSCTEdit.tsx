import React from 'react';

import {useAppSelector} from "../../../../hooks/redux";

import {patientAPI} from "../../../../services/PatientService";
import {Race} from "../../../../DataLists/Race";
import {IPatientUpdate} from "../../../../models/IPatientUpdate";
import {useAppDispatch} from "../../../../store/store";
import {useNavigate, useParams} from "react-router-dom";
import EditFieldStr from "../../../common/EditFieldStr";
import EditFieldSelect from "../../../common/EditFieldSelect";
import {Clinics} from "../../../../DataLists/Clinics";
import EditFieldRadio from "../../../common/EditFieldRadio";
import MyButton from "../../../common/MyButton";
import {useForm} from "react-hook-form";


const MSCTEdit = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const {SelectedPatient} = useAppSelector(state => state.additionalReducer)
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

    // const initialMCT: any = {
    //     AV_annulus_fibrosis: SelectedPatient.MCT.AV_annulus_fibrosis, // Фиброзное кольцо аортального клапана
    //     sinuses_valsalva: SelectedPatient.MCT.sinuses_valsalva, // Синусы Вальсальвы
    //     sinotubular_junction: SelectedPatient.MCT.sinotubular_junction, // Синотубулярное соединение
    //     asc_aorta_pulm_art_bif: SelectedPatient.MCT.asc_aorta_pulm_art_bif, // Восходящий отдел аорты на уровне бифуркации легочной артерии
    //     asc_aorta_before_BCS: SelectedPatient.MCT.asc_aorta_before_BCS, // Восходящий отдел аорты перед БЦС
    //     aortic_arch_before_CCA: SelectedPatient.MCT.aortic_arch_before_CCA, // Дуги аорты перед ЛОСА
    //     aortic_arch_before_LSA: SelectedPatient.MCT.aortic_arch_before_LSA, // Дуги аорты перед левой подключичной артерии
    //     aorticlsthmus: SelectedPatient.MCT.aorticlsthmus, // перешеек
    //     desc_aorta_middle_part: SelectedPatient.MCT.desc_aorta_middle_part, // средняя часть нисходящей аорты
    //     abdominal_aorta: SelectedPatient.MCT.abdominal_aorta, // брюшная аорта
    // }


    const [updatePatient, {}] = patientAPI.useUpdatePatientMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    const onSubmit = async (data:any) => {
        const UpdatePatientData: IPatientUpdate = {
            patientID: SelectedPatient.patientID,
            employee_id: user!.id,
            MCT: {
                AV_annulus_fibrosis: data.AV_annulus_fibrosis, // Фиброзное кольцо аортального клапана
                sinuses_valsalva: data.sinuses_valsalva, // Синусы Вальсальвы
                sinotubular_junction: data.sinotubular_junction, // Синотубулярное соединение
                asc_aorta_pulm_art_bif: data.asc_aorta_pulm_art_bif, // Восходящий отдел аорты на уровне бифуркации легочной артерии
                asc_aorta_before_BCS: data.asc_aorta_before_BCS, // Восходящий отдел аорты перед БЦС
                aortic_arch_before_CCA: data.aortic_arch_before_CCA, // Дуги аорты перед ЛОСА
                aortic_arch_before_LSA: data.aortic_arch_before_LSA, // Дуги аорты перед левой подключичной артерии
                aorticlsthmus: data.aorticlsthmus, // перешеек
                desc_aorta_middle_part: data.desc_aorta_middle_part, // средняя часть нисходящей аорты
                abdominal_aorta: data.abdominal_aorta, // брюшная аорта

            }
        }
        //await updatePatient(UpdatePatientData)
        navigate(`/auth/menu/patients/${SelectedPatient.patientID}/msct`)
        alert(JSON.stringify(data))
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>МСКТ режим редактирования</h1>

            <div className='grid relative grid-cols-1 gap-y-3 my-4'>

                <EditFieldStr
                    label="Фиброзного кольца аортального клапана"
                    defaultValue={SelectedPatient.MCT.AV_annulus_fibrosis}
                    register={register("AV_annulus_fibrosis")}
                    id="AV_annulus_fibrosis"
                />

                <EditFieldStr
                    label="Синуса Вальсальвы"
                    defaultValue={SelectedPatient.MCT.sinuses_valsalva}
                    register={register("sinuses_valsalva")}
                    id="sinuses_valsalva"
                />

                <EditFieldStr
                    label="Синотубулярного соединения"
                    defaultValue={SelectedPatient.MCT.sinotubular_junction}
                    register={register("sinotubular_junction")}
                    id="sinotubular_junction"
                />

                <EditFieldStr
                    label="Восходящего отдела аорты на уровне бифуркации легочной артерии"
                    defaultValue={SelectedPatient.MCT.asc_aorta_pulm_art_bif}
                    register={register("asc_aorta_pulm_art_bif")}
                    id="asc_aorta_pulm_art_bif"
                />

                <EditFieldStr
                    label="Восходящего отдела аорты перед БЦС"
                    defaultValue={SelectedPatient.MCT.asc_aorta_before_BCS}
                    register={register("asc_aorta_before_BCS")}
                    id="asc_aorta_before_BCS"
                />

                <EditFieldStr
                    label="Дуги аорты перед ЛОСА"
                    defaultValue={SelectedPatient.MCT.aortic_arch_before_CCA}
                    register={register("aortic_arch_before_CCA")}
                    id="aortic_arch_before_CCA"
                />

                <EditFieldStr
                    label="Дуги аорты перед левой подключичной артерии"
                    defaultValue={SelectedPatient.MCT.aortic_arch_before_LSA}
                    register={register("aortic_arch_before_LSA")}
                    id="aortic_arch_before_LSA"
                />

                <EditFieldStr
                    label="Перешейка"
                    defaultValue={SelectedPatient.MCT.aorticlsthmus}
                    register={register("aorticlsthmus")}
                    id="aorticlsthmus"
                />

                <EditFieldStr
                    label="Средней части нисходящей аорты"
                    defaultValue={SelectedPatient.MCT.desc_aorta_middle_part}
                    register={register("desc_aorta_middle_part")}
                    id="desc_aorta_middle_part"
                />

                <EditFieldStr
                    label="Брюшной аорты"
                    defaultValue={SelectedPatient.MCT.abdominal_aorta}
                    register={register("abdominal_aorta")}
                    id="abdominal_aorta"
                />

                <MyButton
                    onClick={() => {navigate(`/auth/menu/patients/${SelectedPatient.patientID}/msct`)}}
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

export default MSCTEdit;