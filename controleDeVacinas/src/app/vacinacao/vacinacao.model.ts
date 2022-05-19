import { UsuariosModel } from "../usuarios/usuarios.model";
import { VacinasModel } from "../vacinas/vacinas.model";

export class VacinacaoModel{
  id? :number;
  dataAplic? : string;
  numDose? : string;
  dataProxAplic? : string;
  usuario? : UsuariosModel;
  vacina? : VacinasModel;
}
