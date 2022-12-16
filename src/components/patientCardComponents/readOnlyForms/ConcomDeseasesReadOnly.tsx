import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {additionalSlice} from "../../../store/reducers/AdditionalSlice";
import {useNavigate} from "react-router-dom";
import ReadFieldBool from "../../common/ReadFieldBool";
import ReadFieldStr from "../../common/ReadFieldStr";
import MyButton from "../../common/MyButton";



const ConcomDeseasesReadOnly = () => {
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();

    const dispatch = useAppDispatch()

    const birthday = new Date(SelectedPatient.personal_data.birthday)
    return (

        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>Сопутствующие заболевания режим чтения</h1>
            <div className='grid relative grid-cols-1 gap-y-4 my-4'>

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Наличие клиники ишемической болезни сердца"
                    boolValue={SelectedPatient.concom_desease.clinicIschHeartDis}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Острые инфаркты миокарда в анамнезе"
                    boolValue={SelectedPatient.concom_desease.acuteMyocardilInfarctionBool}
                />

                {Boolean(SelectedPatient.concom_desease.acuteMyocardilInfarctionBool) &&
                    <ReadFieldStr
                        label="Количество инфарктов миокарда"
                        value={SelectedPatient.concom_desease.acuteMyocardilInfarctionNum}
                        spanClassName="w-1/2"

                    />}

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Текущий инфаркт миокарда"
                    boolValue={SelectedPatient.concom_desease.currentMyocardilInfarction}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Наличие сахарного диабета"
                    boolValue={SelectedPatient.concom_desease.diabetes}
                />

                {Boolean(SelectedPatient.concom_desease.diabetes) &&
                    <ReadFieldStr
                        label="Тип сахарного диабета"
                        value={SelectedPatient.concom_desease.diabetesType}
                        spanClassName="w-1/2"
                    />}

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Наличие цереброваскулярной болезни"
                    boolValue={SelectedPatient.concom_desease.cerebrovascularDisease}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Гемодинамические значимые стенозы БЦА"
                    boolValue={SelectedPatient.concom_desease.BCAStenosis}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Транзисторная ишемическая атака"
                    boolValue={SelectedPatient.concom_desease.translschAttack}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="ОНМК в анамнезе"
                    boolValue={SelectedPatient.concom_desease.ACVA}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Наличие хронических заболеваний легких"
                    boolValue={SelectedPatient.concom_desease.chronicLungDisease}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Наличие инфекционных заболеваний перенесенных ранее"
                    boolValue={SelectedPatient.concom_desease.prevInfectiousDisease}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Наличие нарушений ритма и проводимости"
                    boolValue={SelectedPatient.concom_desease.rhythmConcluctionDisturbances}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Наличие заболеваний щитовидной железы"
                    boolValue={SelectedPatient.concom_desease.thyroidDisease}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Наличие острой почечной недостаточности"
                    boolValue={SelectedPatient.concom_desease.acuteRenalFailure}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Наличие хранической почечной недостаточности"
                    boolValue={SelectedPatient.concom_desease.chronicRenalFailure}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Наличие онкологических заболеваний"
                    boolValue={SelectedPatient.concom_desease.oncology}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Наличие гематологических заболеваний"
                    boolValue={SelectedPatient.concom_desease.hematologicalDisease}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="ТЭЛА"
                    boolValue={SelectedPatient.concom_desease.pulmonaryEmbolism}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Травма грудной клетки"
                    boolValue={SelectedPatient.concom_desease.chestWallInjury}
                />

                <ReadFieldStr
                    label="Врожденный двустворчатый или нормальный аортальный клапан"
                    value={SelectedPatient.concom_desease.aorticValve}
                    spanClassName="w-1/2"
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Приобретенные пороки аортального клапана"
                    boolValue={SelectedPatient.concom_desease.acquiredAVDisease}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Дегенеративные поражения аортального клапана"
                    boolValue={SelectedPatient.concom_desease.AVDegenerativeLesions}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Инфекционные поражения аортального клапана"
                    boolValue={SelectedPatient.concom_desease.AVInfectiousLesions}
                />

                <ReadFieldBool
                    labelClassName="w-1/2"
                    valueClassName="w-1/2"
                    label="Травматические поражения сосудистой стенки аорты"
                    boolValue={SelectedPatient.concom_desease.AVWTraumaticLesionsb}
                />

                <MyButton
                    onClick={()=>navigate(`edit`)}
                    className="w-1/5 absolute right-0 -bottom-16"
                >
                    Редактировать
                </MyButton>

            </div>

        </div>
    );
};

export default ConcomDeseasesReadOnly;