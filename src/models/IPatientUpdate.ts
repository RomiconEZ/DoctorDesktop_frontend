
export interface IPatientUpdate {
    patientID: string,
    employee_id: number,
    personal_data?: IPersonal_data_update,
    anthropometric_data?: IAnthropometric_data_update,
    clinical_data?: IClinical_data_update,
    concom_desease?: IConcom_desease_update,
    anamnesis?: IPatient_history_update,
    echocardiogram?: IEchocardiogram_update,
    MCT?: IMultispiral_CT_update
}
export interface IPersonal_data_update {
    first_name?: string,
    second_name?: string,
    patronymic?: string,
    birthday?: number | Date,
    sex?: boolean | number,
    residenseregion?: string,
    city?: string
    clinic?: string,
    race?: string,
    version?: number,
}

export interface IAnthropometric_data_update {
    height?: number, // рост
    weight?: number, // вес
    body_mass_index?: number, // индекс массы тела
    body_surface_area?: number, //площадь поверхности тела
    body_type?: string, // тип тела // выбрать из списка
    connective_tissue_dysplasia?: boolean| number, // дисплазия соединительных тканей
    connective_tissue_dysplasia_Marfan?: boolean| number, // синдром Марфана
    connective_tissue_dysplasia_EhlersDanlos?: boolean| number, // синдром Элерса-Данло
    connective_tissue_dysplasia_LoeysDitz?: boolean| number, // синдром Лойеса-Дитц
    connective_tissue_dysplasia_Terner?: boolean| number, // синдром Тернера
    connective_tissue_dysplasia_Noonan?: boolean| number, // синдром Нуана
    version?: number,
}

export interface IClinical_data_update {
    main_diag?: string, // основной диагноз
    aortic_dissection?: boolean| number, // наличие расслоения аорты
    intramural_hematoma?: boolean| number, // наличие интрамуральной гематомы
    aortic_rupture?: boolean| number, // наличие разрыва аорты
    patient_state?: string, // стабильное/нестабильное состояние
    pain_beh_stern?: boolean| number, // боли за грудиной
    interscap_reg_pain?: boolean| number, // боли в межлопаточной области
    conscious_loss?: boolean| number, // потеря сознания
    low_extrem_ischemia?: boolean| number, // ишемия нижних конечностей
    version?: number,
}

export interface IConcom_desease_update {
    clinicIschHeartDis?: boolean| number,// наличие клиники ишемической болезни сердца?
    acuteMyocardilInfarctionBool?: boolean| number, //количество острых инфарктов миокарда в анамнезе
    acuteMyocardilInfarctionNum?: number, //количество острых инфарктов миокарда в анамнезе
    currentMyocardilInfarction?: boolean| number, //текущий инфаркт миокарда
    diabetes?: boolean| number, // наличие сахарного диабета
    diabetesType?: string, // тип сахарного диабета
    cerebrovascularDisease?: boolean| number, //наличие цереброваскулярной болезни
    BCAStenosis?: boolean| number, //гемодинамические значимые стенозы БЦА
    translschAttack?: boolean| number, // транзисторная ишемическая атака
    ACVA?: boolean| number, // ОНМК в анамнезе
    chronicLungDisease?: boolean| number, // наличие хронических заболеваний легких
    prevInfectiousDisease?: boolean| number, // наличие инфекционных заболеваний перенесенных ранее
    rhythmConcluctionDisturbances?: boolean| number, // ниличие нарушений ритма и проводимости
    thyroidDisease?: boolean| number, // наличие заболеваний щитовидной железы
    acuteRenalFailure?: boolean| number, // наличие острой почечной недостаточности
    chronicRenalFailure?: boolean| number, // наличие хранической почечной недостаточности
    oncology?: boolean| number, // наличие онкологических заболеваний
    hematologicalDisease?: boolean| number, // наличие гематологических заболеваний
    pulmonaryEmbolism?: boolean| number, // ТЭЛА
    chestWallInjury?: boolean| number, // травма грудной клетки
    aorticValve?: string, // вродленный двустворчатый или нормальный аортальный клапан
    acquiredAVDisease?: boolean | number, // приобретенные пороки аортального клапана
    AVDegenerativeLesions?: boolean | number, // дегенеративные поражения аортального клапана
    AVInfectiousLesions?: boolean | number, // инфекционные поражения аортального клапана
    AVWTraumaticLesionsb?: boolean | number, // травматические поражения сосудистой стенки аорты
    version?: number,
}

export interface IPatient_history_update {
    disHeartBloodVesselsFirstLineRelatives?: string, // Заболевания сердца и сосудов у родственников первой линии (дедушки/бабушки, папы/мамы, братья/сестры, дети, внуки)
    relativesConnTissDysplasia?: boolean| number, // Наличие соединительно-тканевой дисплазии у родстенников
    heartSurgeriesPr?: boolean| number,// Наличие операций на сердце в прошлом
    heartSurgeriesType?: string, // Тип операций на сердце в прошлом
    geneticAnalysisPr?: boolean| number, // Проходил ли генетический анализ
    geneticAnalysisRes?: string, // Результаты генетического анализа
    smokingBool?: boolean| number, // Есть опыт курения
    smokingExperience?: number, // опыт курения
    alkoConsumptionBool?: boolean| number, // Употребление алкоголя
    alkoConsumptionExperince?: number, // опыт употребления алкоголя
    drugConsumptionBool?: boolean| number, // Есть опыт употребления наркотиков
    drugConsumptionExperince?: number, // Опыт употребления наркотиков
    occupationalHazards?: string, // Профессиональные вредности
    sports?: string, // Занятие спортом
    diseaseKnowledge?: Date | number, // Когда узнал о заболевании
    employed?: boolean| number, // Работает
    blodThinDrugs?: boolean| number, // Принимает ли кроворазжижающие препараты
    disaggregants?: boolean| number, // Принимает ли дезагреганты
    version?: number,
}

export interface IEchocardiogram_update {
    LVEF?: number, // ФВ ЛЖ(Simpson),%
    LVEDV?: number, // КДО ЛЖ, мл
    LVESV?: number, // КСО ЛЖ, мл
    ascAorticD?: number, // диаметр восходящего отдела аорты, мм
    valsalvaSinusesD?: number, // диаметр синусов Вальсальвы, мм
    AVLeafletN?: number, // Количество створок аортального клапана
    AVAnnuFibrD?: number, // Диаметр фиброизного кольца аортального клапана, мм
    peakSpeedAV?: number, // Пиковая скорость на аортальном клапане, м/с
    AVPressureGradientMax?: number, // Градиент давления на аортальном клапане(максимальный), мм рт ст
    AVPressureGradientMean?: number, // Градиент давления на аортальном клапане(средний), мм рт ст
    aorticRegurgitationDegree?: number, // Степень аортальной регургитации (1,2,3)
    pulmArterySysBP?: number, // Систолическое давление в легочной артерии, мм рт ст

    mitralInsuffBool?: boolean| number, // наличие митральной недостаточности
    mitralInsuffDegree?: string, // степень митральной недостаточности
    mitralStenBool?: boolean| number, // наличие митральной недостаточности
    mitralStenDegree?: string, // степень митральной недостаточности
    tricuspiBool?: boolean| number, // наличие трикуспидальной недостаточности
    tricuspiDegree?: string, // степень митральной недостаточности
    trialSeptalDefectPr?: string, // наличие дефекта межпредсердной перегородки
    version?: number,
}

export interface IMultispiral_CT_update {
    // все в мм
    // Диамтер на уровне:
    AV_annulus_fibrosis?: number, // Фиброзное кольцо аортального клапана
    sinuses_valsalva?: number, // Синусы Вальсальвы
    sinotubular_junction?: number, // Синотубулярное соединение
    asc_aorta_pulm_art_bif?: number, // Восходящий отдел аорты на уровне бифуркации легочной артерии
    asc_aorta_before_BCS?: number, // Восходящий отдел аорты перед БЦС
    aortic_arch_before_CCA?: number, // Дуги аорты перед ЛОСА
    aortic_arch_before_LSA?: number, // Дуги аорты перед левой подключичной артерии
    aorticlsthmus?: number, // перешеек
    desc_aorta_middle_part?: number, // средняя часть нисходящей аорты
    abdominal_aorta?: number, // брюшная аорта
    version?: number,
}