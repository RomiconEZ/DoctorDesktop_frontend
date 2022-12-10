import React from 'react';
import {useAppSelector} from "../../../../hooks/redux";
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
import {useForm} from "react-hook-form";
import EditFieldBool from "../../../common/EditFieldBool";



const EchoCardiogramEdit = () => {
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


    // const initialEchocardiogram: any = {
    //     LVEF: SelectedPatient.echocardiogram.LVEF, // ФВ ЛЖ(Simpson),%
    //     LVEDV: SelectedPatient.echocardiogram.LVEDV, // КДО ЛЖ, мл
    //     LVESV: SelectedPatient.echocardiogram.LVESV, // КСО ЛЖ, мл
    //     ascAorticD: SelectedPatient.echocardiogram.ascAorticD, // диаметр восходящего отдела аорты, мм
    //     valsalvaSinusesD: SelectedPatient.echocardiogram.valsalvaSinusesD, // диаметр синусов Вальсальвы, мм
    //     AVLeafletN: SelectedPatient.echocardiogram.AVLeafletN, // Количество створок аортального клапана
    //     AVAnnuFibrD: SelectedPatient.echocardiogram.AVAnnuFibrD, // Диаметр фиброизного кольца аортального клапана, мм
    //     peakSpeedAV: SelectedPatient.echocardiogram.peakSpeedAV, // Пиковая скорость на аортальном клапане, м/с
    //     AVPressureGradientMax: SelectedPatient.echocardiogram.AVPressureGradientMax, // Градиент давления на аортальном клапане(максимальный), мм рт ст
    //     AVPressureGradientMean: SelectedPatient.echocardiogram.AVPressureGradientMean, // Градиент давления на аортальном клапане(средний), мм рт ст
    //     aorticRegurgitationDegree: SelectedPatient.echocardiogram.aorticRegurgitationDegree, // Степень аортальной регургитации (1,2,3)
    //     pulmArterySysBP: SelectedPatient.echocardiogram.pulmArterySysBP, // Систолическое давление в легочной артерии, мм рт ст
    //
    //     mitralInsuffBool: SelectedPatient.echocardiogram.mitralInsuffBool, // наличие митральной недостаточности
    //     mitralInsuffDegree: SelectedPatient.echocardiogram.mitralInsuffDegree, // степень митральной недостаточности
    //     mitralStenBool: SelectedPatient.echocardiogram.mitralStenBool, // наличие митрального стеноза
    //     mitralStenDegree: SelectedPatient.echocardiogram.mitralStenDegree, // степень митрального стеноза
    //     tricuspiBool: SelectedPatient.echocardiogram.tricuspiBool, // наличие трикуспидальной недостаточности
    //     tricuspiDegree: SelectedPatient.echocardiogram.tricuspiDegree, // степень митральной недостаточности
    //     trialSeptalDefectPr: SelectedPatient.echocardiogram.trialSeptalDefectPr, // наличие дефекта межпредсердной перегородки
    // }

    const [updatePatient, {}] = patientAPI.useUpdatePatientMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    const onSubmit = async (data:any) => {

        const UpdatePatientData: IPatientUpdate = {
            patientID: SelectedPatient.patientID,
            employee_id: user!.id,
            echocardiogram: {
                LVEF: data.LVEF, // ФВ ЛЖ(Simpson),%
                LVEDV: data.LVEDV, // КДО ЛЖ, мл
                LVESV: data.LVESV, // КСО ЛЖ, мл
                ascAorticD: data.ascAorticD, // диаметр восходящего отдела аорты, мм
                valsalvaSinusesD: data.valsalvaSinusesD, // диаметр синусов Вальсальвы, мм
                AVLeafletN: data.AVLeafletN, // Количество створок аортального клапана
                AVAnnuFibrD: data.AVAnnuFibrD, // Диаметр фиброизного кольца аортального клапана, мм
                peakSpeedAV: data.peakSpeedAV, // Пиковая скорость на аортальном клапане, м/с
                AVPressureGradientMax: data.AVPressureGradientMax, // Градиент давления на аортальном клапане(максимальный), мм рт ст
                AVPressureGradientMean: data.AVPressureGradientMean, // Градиент давления на аортальном клапане(средний), мм рт ст
                aorticRegurgitationDegree: data.aorticRegurgitationDegree, // Степень аортальной регургитации (1,2,3)
                pulmArterySysBP: data.pulmArterySysBP, // Систолическое давление в легочной артерии, мм рт ст

                mitralInsuffBool: data.mitralInsuffBool, // наличие митральной недостаточности
                mitralInsuffDegree: data.mitralInsuffDegree, // степень митральной недостаточности
                mitralStenBool: data.mitralStenBool, // наличие митрального стеноза
                mitralStenDegree: data.mitralStenDegree, // степень митрального стеноза
                tricuspiBool: data.tricuspiBool, // наличие трикуспидальной недостаточности
                tricuspiDegree: data.tricuspiDegree, // степень митральной недостаточности
                trialSeptalDefectPr: data.trialSeptalDefectPr, // наличие дефекта межпредсердной перегородки
                }
        }
        //await updatePatient(UpdatePatientData)
        navigate(`/auth/menu/patients/${SelectedPatient.patientID}/echocardiogram`)
        alert(JSON.stringify(data))
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>ЭхоКГ режим редактирования</h1>

            <div className='grid relative grid-cols-1 gap-y-3 my-4'>

                <EditFieldStr
                    label="ФВ ЛЖ(Simpson), %"
                    defaultValue={SelectedPatient.echocardiogram.LVEF}
                    register={register("LVEF")}
                    id="LVEF"
                />

                <EditFieldStr
                    label="КДО ЛЖ, мл"
                    defaultValue={SelectedPatient.echocardiogram.LVEDV}
                    register={register("LVEDV")}
                    id="LVEDV"
                />

                <EditFieldStr
                    label="КСО ЛЖ, мл"
                    defaultValue={SelectedPatient.echocardiogram.LVESV}
                    register={register("LVESV")}
                    id="LVESV"
                />

                <EditFieldStr
                    label="Диаметр восходящего отдела аорты, мм"
                    defaultValue={SelectedPatient.echocardiogram.ascAorticD}
                    register={register("ascAorticD")}
                    id="ascAorticD"
                />

                <EditFieldStr
                    label="Диаметр синусов Вальсальвы, мм"
                    defaultValue={SelectedPatient.echocardiogram.valsalvaSinusesD}
                    register={register("valsalvaSinusesD")}
                    id="valsalvaSinusesD"
                />

                <EditFieldStr
                    label="Количество створок аортального клапана"
                    defaultValue={SelectedPatient.echocardiogram.AVLeafletN}
                    register={register("AVLeafletN")}
                    id="AVLeafletN"
                />

                <EditFieldStr
                    label="Диаметр фиброизного кольца аортального клапана, мм"
                    defaultValue={SelectedPatient.echocardiogram.AVAnnuFibrD}
                    register={register("AVAnnuFibrD")}
                    id="AVAnnuFibrD"
                />

                <EditFieldStr
                    label="Пиковая скорость на аортальном клапане, м/с"
                    defaultValue={SelectedPatient.echocardiogram.peakSpeedAV}
                    register={register("peakSpeedAV")}
                    id="peakSpeedAV"
                />

                <EditFieldStr
                    label="Градиент давления на аортальном клапане(максимальный), мм рт ст"
                    defaultValue={SelectedPatient.echocardiogram.AVPressureGradientMax}
                    register={register("AVPressureGradientMax")}
                    id="AVPressureGradientMax"
                />

                <EditFieldStr
                    label="Градиент давления на аортальном клапане(средний), мм рт ст"
                    defaultValue={SelectedPatient.echocardiogram.AVPressureGradientMean}
                    register={register("AVPressureGradientMean")}
                    id="AVPressureGradientMean"
                />

                <EditFieldSelect
                    label="Степень аортальной регургитации"
                    defaultValue={String(SelectedPatient.echocardiogram.aorticRegurgitationDegree)}
                    id="aorticRegurgitationDegree"
                    listOfValues={Race}
                    register={register("aorticRegurgitationDegree")}
                />

                <EditFieldStr
                    label="Систолическое давление в легочной артерии, мм рт ст"
                    defaultValue={SelectedPatient.echocardiogram.pulmArterySysBP}
                    register={register("pulmArterySysBP")}
                    id="pulmArterySysBP"
                />

                <EditFieldBool
                    register={register("mitralInsuffBool")}
                    defaultValue={Boolean(SelectedPatient.echocardiogram.mitralInsuffBool)}
                    label="Наличие митральной недостаточности"
                    id="mitralInsuffBool"
                />

                <EditFieldSelect
                    label="Степень митральной недостаточности"
                    defaultValue={String(SelectedPatient.echocardiogram.mitralInsuffDegree)}
                    id="mitralInsuffDegree"
                    listOfValues={Race}
                    register={register("mitralInsuffDegree")}
                />

                <EditFieldBool
                    register={register("mitralStenBool")}
                    defaultValue={Boolean(SelectedPatient.echocardiogram.mitralStenBool)}
                    label="Наличие митрального стеноза"
                    id="mitralStenBool"
                />

                <EditFieldSelect
                    label="Степень митрального стеноза"
                    defaultValue={String(SelectedPatient.echocardiogram.mitralStenDegree)}
                    id="mitralStenDegree"
                    listOfValues={Race}
                    register={register("mitralStenDegree")}
                />

                <EditFieldBool
                    register={register("tricuspiBool")}
                    defaultValue={Boolean(SelectedPatient.echocardiogram.tricuspiBool)}
                    label="Наличие трикуспидальной недостаточности"
                    id="tricuspiBool"
                />

                <EditFieldSelect
                    label="Степень митральной недостаточности"
                    defaultValue={String(SelectedPatient.echocardiogram.tricuspiDegree)}
                    id="tricuspiDegree"
                    listOfValues={Race}
                    register={register("tricuspiDegree")}
                />

                <EditFieldBool
                    register={register("trialSeptalDefectPr")}
                    defaultValue={Boolean(SelectedPatient.echocardiogram.trialSeptalDefectPr)}
                    label="Наличие дефекта межпредсердной перегородки"
                    id="trialSeptalDefectPr"
                />


                <MyButton
                    onClick={() => {navigate(`/auth/menu/patients/${SelectedPatient.patientID}/echocardiogram`)}}
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

export default EchoCardiogramEdit;