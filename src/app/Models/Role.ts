import { Niveau } from "./Niveau";
import { Permission } from "./Permission";

export interface Role{

    id:number;
    name:string;
    permissions:[Permission]
    niveaux:[Niveau]

}