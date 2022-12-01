import {IPersonal_data_update} from "../../../../models/IPatientUpdate";
import {ValidatorConfigType} from "../../../../utils/validator";
import {IPatient_history} from "../../../../models/IPatientFull";


type ConfigType = {
  [Property in keyof IPatient_history]?: ValidatorConfigType[Property];
};


const validatorConfig: ConfigType = {


};

export default validatorConfig;
