import React from 'react';
import {useAppSelector} from "../../../hooks/redux";

import {useNavigate} from "react-router-dom";
import ReadFieldStr from "../../common/ReadFieldStr";
import ReadFieldBool from "../../common/ReadFieldBool";
import MyButton from "../../common/MyButton";



const EchoCardiogramReadOnly = () => {
    const {SelectedPatient} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();

    return (

        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>ЭхоКГ режим чтения</h1>

            <div className='grid relative grid-cols-1 gap-y-4 my-4'>

                <div className='flex'>
                    <span className='w-1/4 mr-6 font-semibold text-slate-800'>ФВ ЛЖ(Simpson)</span>
                    <span className='w-3/4 py-2 pl-6 rounded-md bg-our-gray-main-theme font-semibold text-slate-600'>
                        {SelectedPatient.echocardiogram.LVEF} %
                    </span>
                </div>

                <div className='flex'>
                    <span className='w-1/4 mr-6 font-semibold text-slate-800'>КДО ЛЖ</span>
                    <span className='w-3/4 py-2 pl-6 rounded-md bg-our-gray-main-theme font-semibold text-slate-600'>
                        {SelectedPatient.echocardiogram.LVEDV + ' мл'}
                    </span>
                </div>

                <div className='flex'>
                    <span className='w-1/4 mr-6 font-semibold text-slate-800'>КСО ЛЖ</span>
                    <span className='w-3/4 py-2 pl-6 rounded-md bg-our-gray-main-theme font-semibold text-slate-600'>
                        {SelectedPatient.echocardiogram.LVESV + ' мл'}
                    </span>
                </div>

                <ReadFieldStr
                    label="Диаметр восходящего отдела аорты"
                    value={SelectedPatient.echocardiogram.ascAorticD + ' мм'}
                    spanClassName="w-1/2"
                />

                <ReadFieldStr
                    label="Диаметр синусов Вальсальвы"
                    value={SelectedPatient.echocardiogram.valsalvaSinusesD + ' мм'}
                    spanClassName="w-1/2"
                />

                <ReadFieldStr
                    label="Количество створок аортального клапана"
                    value={SelectedPatient.echocardiogram.AVLeafletN}
                    spanClassName="w-1/2"
                />

                <ReadFieldStr
                    label="Диаметр фиброизного кольца аортального клапана"
                    value={SelectedPatient.echocardiogram.AVAnnuFibrD + ' мм'}
                    spanClassName="w-1/2"
                />

                <ReadFieldStr
                    label="Пиковая скорость на аортальном клапане"
                    value={SelectedPatient.echocardiogram.peakSpeedAV + ' м/с'}
                    spanClassName="w-1/2"
                />

                <ReadFieldStr
                    label="Градиент давления на аортальном клапане(максимальный)"
                    value={SelectedPatient.echocardiogram.AVPressureGradientMax + ' мм рт ст'}
                    spanClassName="w-1/2"
                />

                <ReadFieldStr
                    label="Градиент давления на аортальном клапане(средний)"
                    value={SelectedPatient.echocardiogram.AVPressureGradientMean + ' мм рт ст'}
                    spanClassName="w-1/2"
                />

                <ReadFieldStr
                    label="Степень аортальной регургитации"
                    value={SelectedPatient.echocardiogram.aorticRegurgitationDegree}
                    spanClassName="w-1/2"
                />

                <ReadFieldStr
                    label="Систолическое давление в легочной артерии"
                    value={SelectedPatient.echocardiogram.pulmArterySysBP + ' мм рт ст'}
                    spanClassName="w-1/2"
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Наличие митральной недостаточности"
                    boolValue={SelectedPatient.echocardiogram.mitralInsuffBool}
                />

                {Boolean(SelectedPatient.echocardiogram.mitralInsuffBool) &&
                    <ReadFieldStr
                        label="Степень митральной недостаточности"
                        value={SelectedPatient.echocardiogram.mitralInsuffDegree}
                        spanClassName="w-1/2"
                    />}

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Наличие митрального стеноза"
                    boolValue={SelectedPatient.echocardiogram.mitralStenBool}
                />

                {Boolean(SelectedPatient.echocardiogram.mitralStenBool) &&
                    <ReadFieldStr
                        label="Степень митрального стеноза"
                        value={SelectedPatient.echocardiogram.mitralStenDegree}
                        spanClassName="w-1/2"
                    />}


                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Наличие трикуспидальной недостаточности"
                    boolValue={SelectedPatient.echocardiogram.tricuspiBool}
                />

                {Boolean(SelectedPatient.echocardiogram.tricuspiBool) &&
                    <ReadFieldStr
                        label="Степень трикуспидальной недостаточности"
                        value={SelectedPatient.echocardiogram.tricuspiDegree}
                        spanClassName="w-1/2"
                    />}

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Наличие дефекта межпредсердной перегородки"
                    boolValue={SelectedPatient.echocardiogram.trialSeptalDefectPr}
                />

                <MyButton
                    onClick={()=>navigate(`edit`)}
                    className="w-1/5 absolute right-45 -bottom-16"
                >
                    Редактировать
                </MyButton>

            </div>


        </div>
    );
};

export default EchoCardiogramReadOnly;