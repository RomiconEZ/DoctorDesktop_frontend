import React from 'react';

import validatorConfig from './validatorConfig';
import {useAppSelector} from "../../../../hooks/redux";
import {Form, useForm} from "../../../../hooks/useForm";
import {patientAPI} from "../../../../services/PatientService";
import {IPatientUpdate} from "../../../../models/IPatientUpdate";
import {useAppDispatch} from "../../../../store/store";
import Button from "../../../common/Button";
import {useNavigate, useParams} from "react-router-dom";
import {additionalSlice} from "../../../../store/reducers/AdditionalSlice";


const ComputerTomographyEdit = () => {

    const {user} = useAppSelector(state => state.userReducer)
    const {SelectedPatient, IsEditButtonPressed} = useAppSelector(state => state.additionalReducer)
    const navigate = useNavigate();
    const params = useParams<string>()
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
            if (response.data != undefined) {
                dispatch(additionalSlice.actions.ChangeSelectedPatient(response.data))
            }
            navigate(`/auth/menu/patients/${SelectedPatient.patientID}/computer-aided-tomography`)

        }
    }
    return (
        <div className='p-8 mb-16'>
            <h1 className='font-medium font-sans  text-our-greenish-400 text-2xl pb-4'>Компьютерная томография режим редактирования</h1>

            <div className='grid relative grid-cols-1 gap-y-3 my-4'>
            <Form data={data} errors={errors} handleChange={handleInputChange} handleKeyDown={handleKeyDown}>

                <Button type='submit' onClick={handleUpdate} className="w-1/5 absolute right-34 -bottom-16" disabled={Object.keys(errors).length !== 0}>
                    Сохранить
                </Button>
        </Form>
            </div>

        </div>
    );
};

export default ComputerTomographyEdit;