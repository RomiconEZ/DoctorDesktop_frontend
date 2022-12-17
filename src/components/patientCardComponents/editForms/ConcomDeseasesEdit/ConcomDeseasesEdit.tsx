import React from 'react';

import validatorConfig from './validatorConfig';
import {useAppSelector} from "../../../../hooks/redux";
import {Form, useForm} from "../../../../hooks/useForm";
import {patientAPI} from "../../../../services/PatientService";
import {IPatientUpdate} from "../../../../models/IPatientUpdate";
import {useAppDispatch} from "../../../../store/store";
import {InputField, RadioGroup, SelectField} from "../../../common/Fields";
import Button from "../../../common/Button";
import {useNavigate, useParams} from "react-router-dom";
import {yesNo} from "../../../../DataLists/yesNo";
import {AorticValveData} from "../../../../DataLists/AorticValveData";
import {DiabetesTypeData} from "../../../../DataLists/DiabetesTypeData";
import {additionalSlice} from "../../../../store/reducers/AdditionalSlice";





const ConcomDeseasesEdit = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();
    // const params = useParams<string>()
    const dispatch = useAppDispatch()
    let response: any



    const initialAnthropometricData: any = {
        clinicIschHeartDis: SelectedPatient.concom_desease.clinicIschHeartDis,// наличие клиники ишемической болезни сердца?
        acuteMyocardilInfarctionBool: SelectedPatient.concom_desease.acuteMyocardilInfarctionBool, //Были острые инфаркты миокарда в анамнезе
        acuteMyocardilInfarctionNum: SelectedPatient.concom_desease.acuteMyocardilInfarctionNum, //количество острых инфарктов миокарда в анамнезе
        currentMyocardilInfarction: SelectedPatient.concom_desease.currentMyocardilInfarction, //текущий инфаркт миокарда
        diabetes: SelectedPatient.concom_desease.diabetes, // наличие сахарного диабета
        diabetesType: SelectedPatient.concom_desease.diabetesType, // тип сахарного диабета
        cerebrovascularDisease: SelectedPatient.concom_desease.cerebrovascularDisease, //наличие цереброваскулярной болезни
        BCAStenosis: SelectedPatient.concom_desease.BCAStenosis, //гемодинамические значимые стенозы БЦА
        translschAttack: SelectedPatient.concom_desease.translschAttack, // транзисторная ишемическая атака
        ACVA: SelectedPatient.concom_desease.ACVA, // ОНМК в анамнезе
        chronicLungDisease: SelectedPatient.concom_desease.chronicLungDisease, // наличие хронических заболеваний легких
        prevInfectiousDisease: SelectedPatient.concom_desease.prevInfectiousDisease, // наличие инфекционных заболеваний перенесенных ранее
        rhythmConcluctionDisturbances: SelectedPatient.concom_desease.rhythmConcluctionDisturbances, // наличие нарушений ритма и проводимости
        thyroidDisease: SelectedPatient.concom_desease.thyroidDisease, // наличие заболеваний щитовидной железы
        acuteRenalFailure: SelectedPatient.concom_desease.acuteRenalFailure, // наличие острой почечной недостаточности
        chronicRenalFailure: SelectedPatient.concom_desease.chronicRenalFailure, // наличие хранической почечной недостаточности
        oncology: SelectedPatient.concom_desease.oncology, // наличие онкологических заболеваний
        hematologicalDisease: SelectedPatient.concom_desease.hematologicalDisease, // наличие гематологических заболеваний
        pulmonaryEmbolism: SelectedPatient.concom_desease.pulmonaryEmbolism, // ТЭЛА
        chestWallInjury: SelectedPatient.concom_desease.chestWallInjury, // травма грудной клетки
        aorticValve: SelectedPatient.concom_desease.aorticValve, // врожденный двустворчатый или нормальный аортальный клапан
        acquiredAVDisease: SelectedPatient.concom_desease.acquiredAVDisease, // приобретенные пороки аортального клапана
        AVDegenerativeLesions: SelectedPatient.concom_desease.AVDegenerativeLesions, // дегенеративные поражения аортального клапана
        AVInfectiousLesions: SelectedPatient.concom_desease.AVInfectiousLesions, // инфекционные поражения аортального клапана
        AVWTraumaticLesionsb: SelectedPatient.concom_desease.AVWTraumaticLesionsb, // травматические поражения сосудистой стенки аорты

    }
    const {data, errors, handleInputChange, handleKeyDown, validate} = useForm(initialAnthropometricData, true, validatorConfig);
    const [updatePatient, {}] = patientAPI.useUpdatePatientMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    const handleUpdate = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (validate(data))
        {
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
            response =await updatePatient(UpdatePatientData)
            if (response.data !== undefined) {
                dispatch(additionalSlice.actions.ChangeSelectedPatient(response.data))
            }
            navigate(`/auth/menu/patients/${SelectedPatient.patientID}/concom-deseases`)

        }
    }
    return (
        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>Сопутствующие заболевания режим редактирования</h1>

            <div className='grid relative grid-cols-1 gap-y-3 my-4'>
        <Form data={data} errors={errors} handleChange={handleInputChange} handleKeyDown={handleKeyDown}>
            <RadioGroup name='clinicIschHeartDis' label='Наличие клиники ишемической болезни сердца' items={yesNo}/>
            <RadioGroup name='acuteMyocardilInfarctionBool' label='Острые инфаркты миокарда в анамнезе' items={yesNo}/>
            <InputField name='acuteMyocardilInfarctionNum' label='Количество острых инфарктов миокарда в анамнезе'/>
            <RadioGroup name='currentMyocardilInfarction' label='Текущий инфаркт миокарда' items={yesNo}/>
            <RadioGroup name='diabetes' label='Наличие сахарного диабета' items={yesNo}/>
            <SelectField name='diabetesType' label='Тип сахарного диабета' options={DiabetesTypeData} />
            <RadioGroup name='cerebrovascularDisease' label='Наличие цереброваскулярной болезни' items={yesNo}/>
            <RadioGroup name='BCAStenosis' label='Гемодинамические значимые стенозы БЦА' items={yesNo}/>
            <RadioGroup name='translschAttack' label='Транзисторная ишемическая атака' items={yesNo}/>
            <RadioGroup name='ACVA' label='ОНМК в анамнезе' items={yesNo}/>
            <RadioGroup name='chronicLungDisease' label='Наличие хронических заболеваний легких' items={yesNo}/>
            <RadioGroup name='prevInfectiousDisease' label='Наличие инфекционных заболеваний перенесенных ранее' items={yesNo}/>
            <RadioGroup name='rhythmConcluctionDisturbances' label='Наличие нарушений ритма и проводимости' items={yesNo}/>
            <RadioGroup name='thyroidDisease' label='Наличие заболеваний щитовидной железы' items={yesNo}/>
            <RadioGroup name='acuteRenalFailure' label='Наличие острой почечной недостаточности' items={yesNo}/>
            <RadioGroup name='chronicRenalFailure' label='Наличие хранической почечной недостаточности' items={yesNo}/>
            <RadioGroup name='oncology' label='Наличие онкологических заболеваний' items={yesNo}/>
            <RadioGroup name='hematologicalDisease' label='Наличие гематологических заболеваний' items={yesNo}/>
            <RadioGroup name='pulmonaryEmbolism' label='ТЭЛА' items={yesNo}/>
            <RadioGroup name='chestWallInjury' label='Травма грудной клетки' items={yesNo}/>
            <SelectField name='aorticValve' label='Врожденный двустворчатый или нормальный аортальный клапан' options={AorticValveData} />
            <RadioGroup name='acquiredAVDisease' label='Приобретенные пороки аортального клапана' items={yesNo}/>
            <RadioGroup name='AVDegenerativeLesions' label='Дегенеративные поражения аортального клапана' items={yesNo}/>
            <RadioGroup name='AVInfectiousLesions' label='Инфекционные поражения аортального клапана' items={yesNo}/>
            <RadioGroup name='AVWTraumaticLesionsb' label='Травматические поражения сосудистой стенки аорты' items={yesNo}/>
            <Button type='submit' onClick={handleUpdate} className="w-1/5 absolute right-34 -bottom-16" disabled={Object.keys(errors).length !== 0}>
                Сохранить
            </Button>
        </Form>
            </div>

        </div>
    );
};
export default ConcomDeseasesEdit;