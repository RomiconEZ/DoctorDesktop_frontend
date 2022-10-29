export interface IPersonal_data {
    first_name: string,
    second_name: string,
    patronymic: string,
    birthday: string,
    sex: boolean,
    region: string,
    clinic: string,
    race: string
}

export interface IAnthropometric_data {
    height: number,
    weight: number,
    body_mass_index: number,
    body_surface_area: number,
    body_type: string,
    connective_tissue_dysplasia: boolean,
    connective_tissue_dysplasia_type?: string,
}

export interface IClinical_data {
    "main_diag": string,
    "aortic_dissection": number,
    "intramural_hematoma": number,
    "aortic_rupture": number,
    "patient_state": string,
    "pain_beh_stern": number,
    "interscap_reg_pain": number,
    "conscious_loss": number,
    "lo_extrem_ischemia": number,
    "empoyeeID": number,
    "version": number,
    "date": string
}

export interface IPatient {
    id: number,
    personal_data: IPersonal_data,
    anthropometric_data: IAnthropometric_data,
    clinical_data: IClinical_data
}