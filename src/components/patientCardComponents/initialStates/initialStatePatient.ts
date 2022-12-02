import {IPatientFull} from "../../../models/IPatientFull";

export const initialPatientState: IPatientFull = {

        patientID: "",
        employee_id: -1,

        personal_data: {
            first_name: '',
            second_name: '',
            patronymic: '',
            birthday: 0,
            sex: true,
            region: '',
            clinic: '',
            race: '',
            version: 0,
        },
        anthropometric_data: {
            height: 0, // рост
            weight: 0, // вес
            body_mass_index: 0, // индекс массы тела
            body_surface_area: 0, //площадь поверхности тела
            body_type: "", // тип тела // выбрать из списка
            connective_tissue_dysplasia: 0, // дисплазия соединительных тканей
            connective_tissue_dysplasia_Marfan: 0, // синдром Марфана
            connective_tissue_dysplasia_EhlersDanlos: 0, // синдром Элерса-Данло
            connective_tissue_dysplasia_LoeysDitz: 0, // синдром Лойеса-Дитц
            connective_tissue_dysplasia_Terner: 0, // синдром Тернера
            connective_tissue_dysplasia_Noonan: 0, // синдром Нуана
            version: 0,
            date: 0
        },

        clinical_data: {
            main_diag: "", // основной диагноз
            aortic_dissection: 0, // наличие расслоения аорты
            intramural_hematoma: 0, // наличие интрамуральной гематомы
            aortic_rupture: 0, // наличие разрыва аорты
            patient_state: "", // стабильное/нестабильное состояние
            pain_beh_stern: 0, // боли за грудиной
            interscap_reg_pain: 0, // боли в межлопаточной области
            conscious_loss: 0, // потеря сознания
            low_extrem_ischemia: 0, // ишемия нижних конечностей
            version: 0,
            date: 0
        },

        concom_desease: {
            clinicIschHeartDis: 0,// наличие клиники ишемической болезни сердца?
            acuteMyocardilInfarctionBool: 0, //количество острых инфарктов миокарда в анамнезе
            acuteMyocardilInfarctionNum: 0, //количество острых инфарктов миокарда в анамнезе
            currentMyocardilInfarction: 0, //текущий инфаркт миокарда
            diabetes: 0, // наличие сахарного диабета
            diabetesType: "", // тип сахарного диабета
            cerebrovascularDisease: 0, //наличие цереброваскулярной болезни
            BCAStenosis: 0, //гемодинамические значимые стенозы БЦА
            translschAttack: 0, // транзисторная ишемическая атака
            ACVA: 0, // ОНМК в анамнезе
            chronicLungDisease: 0, // наличие хронических заболеваний легких
            prevInfectiousDisease: 0, // наличие инфекционных заболеваний перенесенных ранее
            rhythmConcluctionDisturbances: 0, // ниличие нарушений ритма и проводимости
            thyroidDisease: 0, // наличие заболеваний щитовидной железы
            acuteRenalFailure: 0, // наличие острой почечной недостаточности
            chronicRenalFailure: 0, // наличие хранической почечной недостаточности
            oncology: 0, // наличие онкологических заболеваний
            hematologicalDisease: 0, // наличие гематологических заболеваний
            pulmonaryEmbolism: 0, // ТЭЛА
            chestWallInjury: 0, // травма грудной клетки
            aorticValve: "", // вродленный двустворчатый или нормальный аортальный клапан
            acquiredAVDisease: 0, // приобретенные пороки аортального клапана
            AVDegenerativeLesions: 0, // дегенеративные поражения аортального клапана
            AVInfectiousLesions: 0, // инфекционные поражения аортального клапана
            AVWTraumaticLesionsb: 0, // травматические поражения сосудистой стенки аорты
            version: 0,
            date: 0
        },

        echocardiogram: {
            LVEF: 0, // ФВ ЛЖ(Simpson),%
            LVEDV: 0, // КДО ЛЖ, мл
            LVESV: 0, // КСО ЛЖ, мл
            ascAorticD: 0, // диаметр восходящего отдела аорты, мм
            valsalvaSinusesD: 0, // диаметр синусов Вальсальвы, мм
            AVLeafletN: 0, // Количество створок аортального клапана
            AVAnnuFibrD: 0, // Диаметр фиброизного кольца аортального клапана, мм
            peakSpeedAV: 0, // Пиковая скорость на аортальном клапане, м/с
            AVPressureGradientMax: 0, // Градиент давления на аортальном клапане(максимальный), мм рт ст
            AVPressureGradientMean: 0, // Градиент давления на аортальном клапане(средний), мм рт ст
            aorticRegurgitationDegree: 0, // Степень аортальной регургитации (1,2,3)
            pulmArterySysBP: 0, // Систолическое давление в легочной артерии, мм рт ст

            mitralInsuffBool: 0, // наличие митральной недостаточности
            mitralInsuffDegree: "", // степень митральной недостаточности
            mitralStenBool: 0, // наличие митральной недостаточности
            mitralStenDegree: "", // степень митральной недостаточности
            tricuspiBool: 0, // наличие трикуспидальной недостаточности
            tricuspiDegree: "", // степень митральной недостаточности
            trialSeptalDefectPr: 0, // наличие дефекта межпредсердной перегородки
            version: 0,
            date: 0
        },

        anamnesis: {
            disHeartBloodVesselsFirstLineRelatives: "", // Заболевания сердца и сосудов у родственников первой линии (дедушки/бабушки, папы/мамы, братья/сестры, дети, внуки)
            relativesConnTissDysplasia: 0, // Наличие соединительно-тканевой дисплазии у родстенников
            heartSurgeriesPr: 0,// Наличие операций на сердце в прошлом
            heartSurgeriesType: "", // Тип операций на сердце в прошлом
            geneticAnalysisPr: 0, // Проходил ли генетический анализ
            geneticAnalysisRes: "", // Результаты генетического анализа
            smokingBool: 0, // Есть опыт курения
            smokingExperience: 0, // Опыт курения
            alkoConsumptionBool: 0, // Есть опыт употребления алкоголя
            alkoConsumptionExperince: 0, // Опыт употребления алкоголя
            drugConsumptionBool: 0, // Есть опыт употребления наркотиков
            drugConsumptionExperince: 0, // Опыт употребления наркотиков
            occupationalHazards: "", // Профессиональные вредности
            sports: "", // Занятие спортом
            diseaseKnowledge: 0, // Когда узнал о заболевании
            employed: 0, // Работает
            blodThinDrugs: 0, // Принимает ли кроворазжижающие препараты
            disaggregants: 0, // Принимает ли дезагреганты
            version: 0,
            date: 0
        },

        MCT: {
            AV_annulus_fibrosis: 0,
            sinuses_valsalva: 0,
            sinotubular_junction: 0,
            asc_aorta_pulm_art_bif: 0,
            asc_aorta_before_BCS: 0,
            aortic_arch_before_CCA: 0,
            aortic_arch_before_LSA: 0,
            aorticlsthmus: 0,
            desc_aorta_middle_part: 0,
            abdominal_aorta: 0,
            version: 0,
            date: 0
        }

}