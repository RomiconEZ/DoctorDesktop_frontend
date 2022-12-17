import {ValidatorConfigType} from "../../../../utils/validator";
import {IMultispiral_CT} from "../../../../models/IPatientFull";


type ConfigType = {
  [Property in keyof IMultispiral_CT]?: ValidatorConfigType[Property];
};


const validatorConfig: ConfigType = {



};

export default validatorConfig;
