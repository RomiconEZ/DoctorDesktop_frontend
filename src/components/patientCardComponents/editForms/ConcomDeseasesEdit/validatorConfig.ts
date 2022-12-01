import {IPersonal_data_update} from "../../../../models/IPatientUpdate";
import {ValidatorConfigType} from "../../../../utils/validator";
import {IConcom_desease} from "../../../../models/IPatientFull";


type ConfigType = {
  [Property in keyof IConcom_desease]?: ValidatorConfigType[Property];
};


const validatorConfig: ConfigType = {


};

export default validatorConfig;
