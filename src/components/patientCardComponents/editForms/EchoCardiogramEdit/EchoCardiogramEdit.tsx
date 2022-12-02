import React from 'react';

import validatorConfig from './validatorConfig';
import {useAppSelector} from "../../../../hooks/redux";
import {Form, useForm} from "../../../../hooks/useForm";
import {patientAPI} from "../../../../services/PatientService";
import {IPatientUpdate} from "../../../../models/IPatientUpdate";
import {useAppDispatch} from "../../../../store/store";
import {DatePickerField, InputField, RadioGroup, SelectField} from "../../../common/Fields";
import Button from "../../../common/Button";
import {useNavigate, useParams} from "react-router-dom";
import {yesNo} from "../../../../DataLists/yesNo";
import {AorticRegurgitationDegreeData} from "../../../../DataLists/AorticRegurgitationDegreeData";
import {MitralInsuffDegreeData} from "../../../../DataLists/MitralInsuffDegreeData";
import {MitralStenDegreeData} from "../../../../DataLists/MitralStenDegreeData";
import {TricuspiDegreeData} from "../../../../DataLists/TricuspiDegreeData";



const EchoCardiogramEdit = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();
    const params = useParams<string>()
    const dispatch = useAppDispatch()


    const initialEchocardiogram: any = {
        LVEF: SelectedPatient.echocardiogram.LVEF, // ФВ ЛЖ(Simpson),%
        LVEDV: SelectedPatient.echocardiogram.LVEDV, // КДО ЛЖ, мл
        LVESV: SelectedPatient.echocardiogram.LVESV, // КСО ЛЖ, мл
        ascAorticD: SelectedPatient.echocardiogram.ascAorticD, // диаметр восходящего отдела аорты, мм
        valsalvaSinusesD: SelectedPatient.echocardiogram.valsalvaSinusesD, // диаметр синусов Вальсальвы, мм
        AVLeafletN: SelectedPatient.echocardiogram.AVLeafletN, // Количество створок аортального клапана
        AVAnnuFibrD: SelectedPatient.echocardiogram.AVAnnuFibrD, // Диаметр фиброизного кольца аортального клапана, мм
        peakSpeedAV: SelectedPatient.echocardiogram.peakSpeedAV, // Пиковая скорость на аортальном клапане, м/с
        AVPressureGradientMax: SelectedPatient.echocardiogram.AVPressureGradientMax, // Градиент давления на аортальном клапане(максимальный), мм рт ст
        AVPressureGradientMean: SelectedPatient.echocardiogram.AVPressureGradientMean, // Градиент давления на аортальном клапане(средний), мм рт ст
        aorticRegurgitationDegree: SelectedPatient.echocardiogram.aorticRegurgitationDegree, // Степень аортальной регургитации (1,2,3)
        pulmArterySysBP: SelectedPatient.echocardiogram.pulmArterySysBP, // Систолическое давление в легочной артерии, мм рт ст

        mitralInsuffBool: SelectedPatient.echocardiogram.mitralInsuffBool, // наличие митральной недостаточности
        mitralInsuffDegree: SelectedPatient.echocardiogram.mitralInsuffDegree, // степень митральной недостаточности
        mitralStenBool: SelectedPatient.echocardiogram.mitralStenBool, // наличие митрального стеноза
        mitralStenDegree: SelectedPatient.echocardiogram.mitralStenDegree, // степень митрального стеноза
        tricuspiBool: SelectedPatient.echocardiogram.tricuspiBool, // наличие трикуспидальной недостаточности
        tricuspiDegree: SelectedPatient.echocardiogram.tricuspiDegree, // степень митральной недостаточности
        trialSeptalDefectPr: SelectedPatient.echocardiogram.trialSeptalDefectPr, // наличие дефекта межпредсердной перегородки

    }
    const {data, errors, handleInputChange, handleKeyDown, validate} = useForm(initialEchocardiogram, true, validatorConfig);
    const [updatePatient, {}] = patientAPI.useUpdatePatientMutation();// {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями

    const handleUpdate = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (validate(data))
        {
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
            await updatePatient(UpdatePatientData)
            navigate(`/auth/menu/patients/${SelectedPatient.patientID}/echocardiogram`)

        }
    }
    return (
        <Form data={data} errors={errors} handleChange={handleInputChange} handleKeyDown={handleKeyDown}>
            <InputField name='LVEF' label='ФВ ЛЖ(Simpson),%'/>
            <InputField name='LVEDV' label='КДО ЛЖ, мл'/>
            <InputField name='LVESV' label='КСО ЛЖ, мл'/>
            <InputField name='ascAorticD' label='Диаметр восходящего отдела аорты, мм'/>
            <InputField name='valsalvaSinusesD' label='Диаметр синусов Вальсальвы, мм'/>
            <InputField name='AVLeafletN' label='Количество створок аортального клапана'/>
            <InputField name='AVAnnuFibrD' label='Диаметр фиброизного кольца аортального клапана, мм'/>
            <InputField name='peakSpeedAV' label='Пиковая скорость на аортальном клапане, м/с'/>
            <InputField name='AVPressureGradientMax' label='Градиент давления на аортальном клапане(максимальный), мм рт ст'/>
            <InputField name='AVPressureGradientMean' label='Градиент давления на аортальном клапане(средний), мм рт ст'/>
            <SelectField label='aorticRegurgitationDegree' name='Степень аортальной регургитации' options={AorticRegurgitationDegreeData} />
            <InputField name='pulmArterySysBP' label='Систолическое давление в легочной артерии, мм рт ст'/>

            <RadioGroup name='mitralInsuffBool' label='Наличие митральной недостаточности' items={yesNo}/>
            <SelectField label='mitralInsuffDegree' name='Степень митральной недостаточности' options={MitralInsuffDegreeData} />


            <RadioGroup name='mitralStenBool' label='Наличие митрального стеноза' items={yesNo}/>
            <SelectField label='mitralStenDegree' name='Степень митрального стеноза' options={MitralStenDegreeData} />


            <RadioGroup name='tricuspiBool' label='Наличие трикуспидальной недостаточности' items={yesNo}/>
            <SelectField label='tricuspiDegree' name='Степень митральной недостаточности' options={TricuspiDegreeData} />

            <RadioGroup name='trialSeptalDefectPr' label='Наличие дефекта межпредсердной перегородки' items={yesNo}/>

            <Button type='submit' onClick={handleUpdate} fullWidth disabled={Object.keys(errors).length !== 0}>
                Сохранить
            </Button>
        </Form>
    );
};

export default EchoCardiogramEdit;