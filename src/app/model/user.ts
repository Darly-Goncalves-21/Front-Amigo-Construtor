import { Telefone } from './telefone';
export class User {

id?: number;
login?: string;
nome?: string;
senha?: string;
cep?: string;

  telefones!: Array<Telefone>;


}
