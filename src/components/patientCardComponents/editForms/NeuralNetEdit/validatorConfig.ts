import {IPersonal_data_update} from "../../../../models/IPatientUpdate";
import {ValidatorConfigType} from "../../../../utils/validator";


type ConfigType = {
  [Property in keyof IPersonal_data_update]?: ValidatorConfigType[Property];
};


const validatorConfig: ConfigType = {

};

export default validatorConfig;
