import {ValidatorConfigType} from "../../../../utils/validator";
import {IEchocardiogram} from "../../../../models/IPatientFull";


type ConfigType = {
  [Property in keyof IEchocardiogram]?: ValidatorConfigType[Property];
};


const validatorConfig: ConfigType = {


};

export default validatorConfig;
