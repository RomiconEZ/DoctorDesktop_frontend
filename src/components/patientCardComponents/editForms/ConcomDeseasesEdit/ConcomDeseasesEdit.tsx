import React from 'react';
import {useAppSelector} from "../../../../hooks/redux";
import {useForm} from "react-hook-form";
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
import EditFieldBool from "../../../common/EditFieldBool";


const ConcomDeseasesEdit = () => {
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

    // const initialAnthropometricData: any = {
    //     clinicIschHeartDis: SelectedPatient.concom_desease.clinicIschHeartDis,// наличие клиники ишемической болезни сердца?
    //     acuteMyocardilInfarctionBool: SelectedPatient.concom_desease.acuteMyocardilInfarctionBool, //Были острые инфаркты миокарда в анамнезе
    //     acuteMyocardilInfarctionNum: SelectedPatient.concom_desease.acuteMyocardilInfarctionNum, //количество острых инфарктов миокарда в анамнезе
    //     currentMyocardilInfarction: SelectedPatient.concom_desease.currentMyocardilInfarction, //текущий инфаркт миокарда
    //     diabetes: SelectedPatient.concom_desease.diabetes, // наличие сахарного диабета
    //     diabetesType: SelectedPatient.concom_desease.diabetesType, // тип сахарного диабета
    //     cerebrovascularDisease: SelectedPatient.concom_desease.cerebrovascularDisease, //наличие цереброваскулярной болезни
    //     BCAStenosis: SelectedPatient.concom_desease.BCAStenosis, //гемодинамические значимые стенозы БЦА
    //     translschAttack: SelectedPatient.concom_desease.translschAttack, // транзисторная ишемическая атака
    //     ACVA: SelectedPatient.concom_desease.ACVA, // ОНМК в анамнезе
    //     chronicLungDisease: SelectedPatient.concom_desease.chronicLungDisease, // наличие хронических заболеваний легких
    //     prevInfectiousDisease: SelectedPatient.concom_desease.prevInfectiousDisease, // наличие инфекционных заболеваний перенесенных ранее
    //     rhythmConcluctionDisturbances: SelectedPatient.concom_desease.rhythmConcluctionDisturbances, // наличие нарушений ритма и проводимости
    //     thyroidDisease: SelectedPatient.concom_desease.thyroidDisease, // наличие заболеваний щитовидной железы
    //     acuteRenalFailure: SelectedPatient.concom_desease.acuteRenalFailure, // наличие острой почечной недостаточности
    //     chronicRenalFailure: SelectedPatient.concom_desease.chronicRenalFailure, // наличие хранической почечной недостаточности
    //     oncology: SelectedPatient.concom_desease.oncology, // наличие онкологических заболеваний
    //     hematologicalDisease: SelectedPatient.concom_desease.hematologicalDisease, // наличие гематологических заболеваний
    //     pulmonaryEmbolism: SelectedPatient.concom_desease.pulmonaryEmbolism, // ТЭЛА
    //     chestWallInjury: SelectedPatient.concom_desease.chestWallInjury, // травма грудной клетки
    //     aorticValve: SelectedPatient.concom_desease.aorticValve, // врожденный двустворчатый или нормальный аортальный клапан
    //     acquiredAVDisease: SelectedPatient.concom_desease.acquiredAVDisease, // приобретенные пороки аортального клапана
    //     AVDegenerativeLesions: SelectedPatient.concom_desease.AVDegenerativeLesions, // дегенеративные поражения аортального клапана
    //     AVInfectiousLesions: SelectedPatient.concom_desease.AVInfectiousLesions, // инфекционные поражения аортального клапана
    //     AVWTraumaticLesionsb: SelectedPatient.concom_desease.AVWTraumaticLesionsb, // травматические поражения сосудистой стенки аорты
    //
    // }
    const [updatePatient, {}] = patientAPI.useUpdatePatientMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    const onSubmit = async (data:any) => {
        const UpdatePatientData: IPatientUpdate = {
            patientID: SelectedPatient.patientID,
            employee_id: user!.id,
            concom_desease: {
                clinicIschHeartDis: data.clinicIschHeartDis,// наличие клиники ишемической болезни сердца?
                acuteMyocardilInfarctionBool: data.acuteMyocardilInfarctionBool, //Были острые инфаркты миокарда в анамнезе
                acuteMyocardilInfarctionNum: data.acuteMyocardilInfarctionNum, //количество острых инфарктов миокарда в анамнезе
                currentMyocardilInfarction: data.currentMyocardilInfarction, //текущий инфаркт миокарда
                diabetes: data.diabetes, // наличие сахарного диабета
                diabetesType: data.diabetesType, // тип сахарного диабета
                cerebrovascularDisease: data.cerebrovascularDisease, //наличие цереброваскулярной болезни
                BCAStenosis: data.BCAStenosis, //гемодинамические значимые стенозы БЦА
                translschAttack: data.translschAttack, // транзисторная ишемическая атака
                ACVA: data.ACVA, // ОНМК в анамнезе
                chronicLungDisease: data.chronicLungDisease, // наличие хронических заболеваний легких
                prevInfectiousDisease: data.prevInfectiousDisease, // наличие инфекционных заболеваний перенесенных ранее
                rhythmConcluctionDisturbances: data.rhythmConcluctionDisturbances, // наличие нарушений ритма и проводимости
                thyroidDisease: data.thyroidDisease, // наличие заболеваний щитовидной железы
                acuteRenalFailure: data.acuteRenalFailure, // наличие острой почечной недостаточности
                chronicRenalFailure: data.chronicRenalFailure, // наличие хранической почечной недостаточности
                oncology: data.oncology, // наличие онкологических заболеваний
                hematologicalDisease: data.hematologicalDisease, // наличие гематологических заболеваний
                pulmonaryEmbolism: data.pulmonaryEmbolism, // ТЭЛА
                chestWallInjury: data.chestWallInjury, // травма грудной клетки
                aorticValve: data.aorticValve, // врожденный двустворчатый или нормальный аортальный клапан
                acquiredAVDisease: data.acquiredAVDisease, // приобретенные пороки аортального клапана
                AVDegenerativeLesions: data.AVDegenerativeLesions, // дегенеративные поражения аортального клапана
                AVInfectiousLesions: data.AVInfectiousLesions, // инфекционные поражения аортального клапана
                AVWTraumaticLesionsb: data.AVWTraumaticLesionsb, // травматические поражения сосудистой стенки аорты
            }
        }
        //await updatePatient(UpdatePatientData)
        navigate(`/auth/menu/patients/${SelectedPatient.patientID}/concom-deseases`)
        alert(JSON.stringify(data))
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>Сопутствующие заболевания режим редактирования</h1>

            <div className='grid relative grid-cols-1 gap-y-3 my-4'>

                <EditFieldBool
                    register={register("clinicIschHeartDis")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.clinicIschHeartDis)}
                    label="Наличие клиники ишемической болезни сердца"
                    id="clinicIschHeartDis"
                />

                <EditFieldBool
                    register={register("acuteMyocardilInfarctionBool")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.acuteMyocardilInfarctionBool)}
                    label="Острые инфаркты миокарда в анамнезе"
                    id="acuteMyocardilInfarctionBool"
                />

                <EditFieldStr
                    label="Количество острых инфарктов миокарда в анамнезе"
                    defaultValue={SelectedPatient.concom_desease.acuteMyocardilInfarctionNum}
                    register={register("acuteMyocardilInfarctionNum")}
                    id="acuteMyocardilInfarctionNum"
                />

                <EditFieldBool
                    register={register("currentMyocardilInfarction")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.currentMyocardilInfarction)}
                    label="Текущий инфаркт миокарда"
                    id="currentMyocardilInfarction"
                />

                <EditFieldBool
                    register={register("diabetes")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.diabetes)}
                    label="Наличие сахарного диабета"
                    id="diabetes"
                />

                <EditFieldSelect
                    label="Тип сахарного диабета"
                    defaultValue={SelectedPatient.concom_desease.diabetesType}
                    id={"diabetesType"}
                    listOfValues={Clinics}
                    register={register("diabetesType")}
                />

                <EditFieldBool
                    register={register("cerebrovascularDisease")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.cerebrovascularDisease)}
                    label="Наличие цереброваскулярной болезни"
                    id="cerebrovascularDisease"
                />

                <EditFieldBool
                    register={register("BCAStenosis")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.BCAStenosis)}
                    label="Гемодинамические значимые стенозы БЦА"
                    id="BCAStenosis"
                />

                <EditFieldBool
                    register={register("translschAttack")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.translschAttack)}
                    label="Транзисторная ишемическая атака"
                    id="translschAttack"
                />

                <EditFieldBool
                    register={register("ACVA")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.ACVA)}
                    label="ОНМК в анамнезе"
                    id="ACVA"
                />

                <EditFieldBool
                    register={register("chronicLungDisease")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.chronicLungDisease)}
                    label="Наличие хронических заболеваний легких"
                    id="chronicLungDisease"
                />

                <EditFieldBool
                    register={register("prevInfectiousDisease")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.prevInfectiousDisease)}
                    label="Наличие инфекционных заболеваний перенесенных ранее"
                    id="prevInfectiousDisease"
                />

                <EditFieldBool
                    register={register("rhythmConcluctionDisturbances")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.rhythmConcluctionDisturbances)}
                    label="Наличие нарушений ритма и проводимости"
                    id="rhythmConcluctionDisturbances"
                />

                <EditFieldBool
                    register={register("thyroidDisease")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.thyroidDisease)}
                    label="Наличие заболеваний щитовидной железы"
                    id="thyroidDisease"
                />

                <EditFieldBool
                    register={register("acuteRenalFailure")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.acuteRenalFailure)}
                    label="Наличие острой почечной недостаточности"
                    id="acuteRenalFailure"
                />

                <EditFieldBool
                    register={register("chronicRenalFailure")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.chronicRenalFailure)}
                    label="Наличие хранической почечной недостаточности"
                    id="chronicRenalFailure"
                />

                <EditFieldBool
                    register={register("oncology")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.oncology)}
                    label="Наличие онкологических заболеваний"
                    id="oncology"
                />

                <EditFieldBool
                    register={register("hematologicalDisease")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.hematologicalDisease)}
                    label="Наличие гематологических заболеваний"
                    id="hematologicalDisease"
                />

                <EditFieldBool
                    register={register("pulmonaryEmbolism")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.pulmonaryEmbolism)}
                    label="ТЭЛА"
                    id="pulmonaryEmbolism"
                />

                <EditFieldBool
                    register={register("chestWallInjury")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.chestWallInjury)}
                    label="Травма грудной клетки"
                    id="chestWallInjury"
                />

                <EditFieldSelect
                    label="Врожденный двустворчатый или нормальный аортальный клапан"
                    defaultValue={SelectedPatient.concom_desease.aorticValve}
                    id={"aorticValve"}
                    listOfValues={Clinics}
                    register={register("aorticValve")}
                />

                <EditFieldBool
                    register={register("acquiredAVDisease")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.acquiredAVDisease)}
                    label="Приобретенные пороки аортального клапана"
                    id="acquiredAVDisease"
                />

                <EditFieldBool
                    register={register("AVDegenerativeLesions")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.AVDegenerativeLesions)}
                    label="Дегенеративные поражения аортального клапана"
                    id="AVDegenerativeLesions"
                />

                <EditFieldBool
                    register={register("AVInfectiousLesions")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.AVInfectiousLesions)}
                    label="Инфекционные поражения аортального клапана"
                    id="AVInfectiousLesions"
                />

                <EditFieldBool
                    register={register("AVWTraumaticLesionsb")}
                    defaultValue={Boolean(SelectedPatient.concom_desease.AVWTraumaticLesionsb)}
                    label="Травматические поражения сосудистой стенки аорты"
                    id="AVWTraumaticLesionsb"
                />

                <MyButton
                    onClick={() => {navigate(`/auth/menu/patients/${SelectedPatient.patientID}/concom-deseases`)}}
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
export default ConcomDeseasesEdit;