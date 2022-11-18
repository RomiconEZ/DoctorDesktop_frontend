export interface IPatientFull {
    patient_id: string,
    employee_id: string,
    personal_data: IPersonal_data,
    anthropometric_data: IAnthropometric_data,
    clinical_data: IClinical_data,
    concom_desease: IConcom_desease,
    anamnesis: IPatient_history,
    echocardiogram: IEchocardiogram,
    MCT: IMultispiral_CT
}

export interface IPersonal_data {
    first_name: string,
    second_name: string,
    patronymic: string,
    birthday: number | Date,
    sex: boolean,
    region: string,
    clinic: string,
    race: string,
    version: number,
}

export interface IAnthropometric_data {
    height: number,
    weight: number,
    body_mass_index: number,
    body_surface_area: number,
    body_type: string,
    connective_tissue_dysplasia: boolean,
    connective_tissue_dysplasia_Marfan: boolean,
    connective_tissue_dysplasia_EhlersDanlos: boolean,
    connective_tissue_dysplasia_LoeysDitz: boolean,
    connective_tissue_dysplasia_Terner: boolean,
    connective_tissue_dysplasia_Noonan: boolean,
    version: number,
    date: Date | number
}

export interface IClinical_data {
    main_diag: string,
    aortic_dissection: boolean,
    intramural_hematoma: boolean,
    aortic_rupture: boolean,
    patient_state: string,
    pain_beh_stern: boolean,
    interscap_reg_pain: string,
    conscious_loss: string,
    low_extrem_ischemia: string,
    version: number,
    date: Date | number
}

export interface IConcom_desease {
    acuteMyocardilInfarctionNum: number,
    currentMyocardilInfarction: boolean,
    diabetes: boolean,
    diabetesType: string,
    cerebrovascularDisease: boolean,
    BCAStenosis: boolean,
    translschAttack: boolean,
    ACVA: boolean,
    chronicLungDisease: boolean,
    prevInfectiousDisease: boolean,
    rhythmConcluctionDisturbances: boolean,
    thyroidDisease: boolean,
    acuteRenalFailure: boolean,
    chronicRenalFailure: boolean,
    oncology: boolean,
    hematologicalDisease: boolean,
    pulmonaryEmbolism: boolean,
    chestWallInjury: boolean,
    aorticValve: string,
    acquiredAVDisease: boolean,
    AVDegenerativeLesions: boolean,
    AVInfectiousLesions: boolean,
    AVWTraumaticLesionsb: boolean,
    version: number,
    date: Date | number
}

export interface IPatient_history {
    disHeartBloodVesselsFirstLineRelatives: boolean,
    relativesConnTissDysplasia: boolean,
    heartSurgeriesPr: boolean,
    heartSurgeriesType: string,
    geneticAnalysisPr: boolean,
    geneticAnalysisRes: string,
    smokingExperience: number,
    alkoConsumptionExperince: number,
    drugConsumptionExperince: number,
    occupationalHazards: string,
    sports: string,
    diseaseKnowledge: Date | number,
    employed: boolean,
    blodThinDrugs: boolean,
    disaggregants: boolean,
    version: number,
    date: Date | number
}

export interface IEchocardiogram {
    LVEF: string,
    LVEDV: string,
    LVESV: string,
    ascAorticD: string,
    valsalvaSinusesD: string,
    AVLeafletN: string,
    AVAnnuFibrD: string,
    peakSpeedAV: string,
    AVPressureGradientMax: string,
    AVPressureGradientMean: string,
    aorticRegurgitationDegree: boolean,
    pulmArterySysBP: string,
    mitralInsuffStenPrD: string,
    tricuspi: string,
    trialSeptalDefectPr: string,
    version: number,
    date: Date | number
}

export interface IMultispiral_CT {
    AV_annulus_fibrosis: number,
    sinuses_valsalva: number,
    sinotubular_junction: number,
    asc_aorta_pulm_art_bif: number,
    asc_aorta_before_BCS: number,
    aortic_arch_before_CCA: number,
    aortic_arch_before_LSA: number,
    aorticlsthmus: number,
    desc_aorta_middle_part: number,
    abdominal_aorta: number,
    version: number,
    date: Date | number
}