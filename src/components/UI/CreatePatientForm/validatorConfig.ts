import {ValidatorConfigType} from "../../../utils/validator";
import {IPatientCreate} from "../../../models/IPatientCreate";


type ConfigType = {
  [Property in keyof IPatientCreate]?: ValidatorConfigType[Property];
};


const validatorConfig: ConfigType = {
  name: {
    isRequired: {
      message: 'Поле "Имя" обязательно для заполнения',
    },
  },
  surname: {
    isRequired: {
      message: 'Поле "Фамилия" обязательно для заполнения',
    },
  },
  patronymic: {
    isRequired: {
      message: 'Поле "Отчество" обязательно для заполнения',
    },
  },
  
};

export default validatorConfig;
