import React from 'react';

import validatorConfig from './validatorConfig';
import {useAppSelector} from "../../../../hooks/redux";
import {additionalSlice} from "../../../../store/reducers/AdditionalSlice";
import {Form, useForm} from "../../../../hooks/useForm";
import {patientAPI} from "../../../../services/PatientService";
import {IPatientUpdate} from "../../../../models/IPatientUpdate";
import {useAppDispatch} from "../../../../store/store";
import Button from "../../../common/Button";
import {useNavigate} from "react-router-dom";


const NeuralNetEdit = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();
    // const params = useParams<string>()
    const dispatch = useAppDispatch()
    let response: any


    const initialAnthropometricData: any = {
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
            }
            response =await updatePatient(UpdatePatientData)
            if (response.data !== undefined) {
                dispatch(additionalSlice.actions.ChangeSelectedPatient(response.data))
            }
            navigate(`/auth/menu/patients/${SelectedPatient.patientID}/neural-net`)

        }
    }
    return (
        <>
            <div className='p-8 mb-16'>
                <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>Данные нейросети режим редактирования</h1>

                <div className='grid relative grid-cols-1 gap-y-3 my-4'>
            <Form data={data} errors={errors} handleChange={handleInputChange} handleKeyDown={handleKeyDown}>

                <Button type='submit' onClick={handleUpdate} className="w-1/5 absolute right-44 -bottom-20" disabled={Object.keys(errors).length !== 0}>
                    Сохранить
                </Button>
            </Form>
                </div>

            </div>
        </>
    );
};

export default NeuralNetEdit;