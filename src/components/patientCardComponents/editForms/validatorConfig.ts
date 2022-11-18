import {ValidatorConfigType} from "../../../utils/validator";
import {IPatientUpdate, IPersonal_data_update} from "../../../models/IPatientUpdate";


type ConfigType = {
  [Property in keyof IPersonal_data_update]?: ValidatorConfigType[Property];
};


const validatorConfig: ConfigType = {
  first_name : {
    isRequired: {
      message: 'Поле "Имя" обязательно для заполнения',
    },
  },
  second_name: {
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
