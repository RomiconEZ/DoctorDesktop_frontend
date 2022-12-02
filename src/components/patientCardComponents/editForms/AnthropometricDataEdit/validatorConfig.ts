import {IPersonal_data_update} from "../../../../models/IPatientUpdate";
import {ValidatorConfigType} from "../../../../utils/validator";
import {IAnthropometric_data} from "../../../../models/IPatientFull";


type ConfigType = {
  [Property in keyof IAnthropometric_data]?: ValidatorConfigType[Property];
};


const validatorConfig: ConfigType = {



};

export default validatorConfig;
