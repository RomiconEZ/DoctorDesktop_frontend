import {IPatient} from "../../models/IPatient";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PatientState {
    patient: IPatient,
    isLoading: boolean,
    error: string,
}
const initialState: PatientState = {
    patient: {
        patient_id: 1,
        employee_id: 2,

        personal_data: {
            first_name: '',
            second_name: '',
            patronymic: '',
            birthday: 0,
            sex: true,
            region: '',
            clinic: '',
            race: '',
            version: 1,
            date: 0
        },
        anthropometric_data: {
            height: 0,
            weight: 0,
            body_mass_index: 0,
            body_surface_area: 0,
            body_type: '',
            connective_tissue_dysplasia: false,
            connective_tissue_dysplasia_EhlersDanlos: false,
            connective_tissue_dysplasia_Marfan: false,
            connective_tissue_dysplasia_LoeysDitz: false,
            connective_tissue_dysplasia_Noonan: false,
            connective_tissue_dysplasia_Terner: false,
            version: 1,
            date: 0
        },

        clinical_data: {
            main_diag: "",
            aortic_dissection: false,
            intramural_hematoma: false,
            aortic_rupture: false,
            patient_state: "",
            pain_beh_stern: false,
            interscap_reg_pain: "",
            conscious_loss: "",
            low_extrem_ischemia: "",
            version: 1,
            date: 0,
        },

        concom_desease: {
            cor_heart_disease_clinic: "bla",
            acuteMyocardilInfarctionNum: 2,
            currentMyocardilInfarction: false,
            diabetes: false,
            diabetesType: "Первый",
            cerebrovascularDisease: false,
            BCAStenosis: false,
            translschAttack: false,
            ACVA: false,
            chronicLungDisease: false,
            prevInfectiousDisease: false,
            rhythmConcluctionDisturbances: false,
            thyroidDisease: false,
            acuteRenalFailure: false,
            chronicRenalFailure: false,
            oncology: false,
            hematologicalDisease: false,
            pulmonaryEmbolism: false,
            chestWallInjury: false,
            aorticValve: "something",
            acquiredAVDisease: false,
            AVDegenerativeLesions: false,
            AVInfectiousLesions: false,
            AVWTraumaticLesionsb: false,
            version: 1,
            date: 0
        },

        echocardiogram: {
            LVEF: "string",
            LVEDV: "string",
            LVESV: "string",
            ascAorticD: "string",
            valsalvaSinusesD: "string",
            AVLeafletN: "string",
            AVAnnuFibrD: "string",
            peakSpeedAV: "string",
            AVPressureGradientMax: "string",
            AVPressureGradientMean: "string",
            aorticRegurgitationDegree: false,
            pulmArterySysBP: "string",
            mitralInsuffStenPrD: "string",
            tricuspi: "string",
            trialSeptalDefectPr: "string",
            version: 1,
            date: 0
        },

        anamnesis: {
            disHeartBloodVesselsFirstLineRelatives: false,
            relativesConnTissDysplasia: false,
            heartSurgeriesPr: false,
            heartSurgeriesType: "string",
            geneticAnalysisPr: false,
            geneticAnalysisRes: "string",
            smokingExperience: 1,
            alkoConsumptionExperince: 1,
            drugConsumptionExperince: 1,
            occupationalHazards: "string",
            sports: "string",
            diseaseKnowledge: 0,
            employed: false,
            blodThinDrugs: false,
            blodThinDrugsType: "string",
            disaggregants: false,
            disaggregantsType: "string",
            version: 1,
            date: 0
        },

        MCT: {
            AV_annulus_fibrosis: 1,
            sinuses_valsalva: 1,
            sinotubular_junction: 1,
            asc_aorta_pulm_art_bif: 1,
            asc_aorta_before_BCS: 1,
            aortic_arch_before_CCA: 1,
            aortic_arch_before_LSA: 1,
            aorticlsthmus: 1,
            desc_aorta_middle_part: 1,
            abdominal_aorta: 1,
            version: 1,
            date: 0
        }
        
    },
    isLoading: false,
    error: '',
}
export const PatientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        patientFetching(state) {
            state.isLoading = true;
        },
        patientFetchingSuccess(state, action: PayloadAction<IPatient>) {
            state.isLoading = false;
            state.error = '';
            state.patient = action.payload;
        },
        patientFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default PatientSlice.reducer;