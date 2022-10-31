import {ValidatorConfigType} from "../../../utils/validator";
import {IDoctorCreate} from "../../../models/IDoctorCreate";


type ConfigType = {
  [Property in keyof IDoctorCreate]?: ValidatorConfigType[Property];
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

  email: {
    isRequired: {
      message: 'Электронная почта обязательна для заполнения',
    },
    isEmail: {
      message: 'Поле "Email" введено не корректно',
    },
  },
  password: {
    isRequired: {
      message: 'Поле "Пароль" обязательно для заполнения',
    },
    isCapitalSymbol: {
      message: 'Пароль должен содержать хотя бы 1 заглавную букву',
    },
    isContainDigit: {
      message: 'Пароль должен содержать хотя бы 1 цифру',
    },

    min: {
      value: 8,
      message: 'Пароль должен содержать минимум 8 символов',
    },
  },


};

export default validatorConfig;
