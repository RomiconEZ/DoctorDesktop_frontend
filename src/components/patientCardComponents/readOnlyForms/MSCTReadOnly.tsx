import React from 'react';
import {useAppSelector} from "../../../hooks/redux";
import {useNavigate} from "react-router-dom";
import ReadFieldStr from "../../common/ReadFieldStr";
import MyButton from "../../common/MyButton";



const MSCTReadOnly = () => {
    const {SelectedPatient} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();

    return (

        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>МСКТ режим чтения</h1>

            <div className='grid relative grid-cols-1 gap-y-4 my-4'>

                <ReadFieldStr
                    label="Фиброзного кольца аортального клапана"
                    value={SelectedPatient.MCT.AV_annulus_fibrosis + ' мм'}
                    spanClassName="w-1/3"
                />

                <ReadFieldStr
                    label="Синуса Вальсальвы"
                    value={SelectedPatient.MCT.sinuses_valsalva + ' мм'}
                    spanClassName="w-1/3"
                />

                <ReadFieldStr
                    label="Синотубулярного соединения"
                    value={SelectedPatient.MCT.sinotubular_junction + ' мм'}
                    spanClassName="w-1/3"
                />

                <ReadFieldStr
                    label="Восходящего отдела аорты на уровне бифуркации легочной артерии"
                    value={SelectedPatient.MCT.asc_aorta_pulm_art_bif + ' мм'}
                    spanClassName="w-1/3"
                />

                <ReadFieldStr
                    label="Восходящего отдела аорты перед БЦС"
                    value={SelectedPatient.MCT.asc_aorta_before_BCS + ' мм'}
                    spanClassName="w-1/3"
                />

                <ReadFieldStr
                    label="Дуги аорты перед ЛОСА"
                    value={SelectedPatient.MCT.aortic_arch_before_CCA + ' мм'}
                    spanClassName="w-1/3"
                />

                <ReadFieldStr
                    label="Дуги аорты перед левой подключичной артерии"
                    value={SelectedPatient.MCT.aortic_arch_before_LSA + ' мм'}
                    spanClassName="w-1/3"
                />

                <ReadFieldStr
                    label="Перешейка"
                    value={SelectedPatient.MCT.aorticlsthmus + ' мм'}
                    spanClassName="w-1/3"
                />

                <ReadFieldStr
                    label="Средней части нисходящей аорты"
                    value={SelectedPatient.MCT.desc_aorta_middle_part + ' мм'}
                    spanClassName="w-1/3"
                />

                <ReadFieldStr
                    label="Брюшной аорты"
                    value={SelectedPatient.MCT.abdominal_aorta + ' мм'}
                    spanClassName="w-1/3"
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

export default MSCTReadOnly;