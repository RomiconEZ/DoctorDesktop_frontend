import {ValidatorConfigType} from "../../../../utils/validator";
import {IClinical_data} from "../../../../models/IPatientFull";


type ConfigType = {
  [Property in keyof IClinical_data]?: ValidatorConfigType[Property];
};


const validatorConfig: ConfigType = {



};

export default validatorConfig;
