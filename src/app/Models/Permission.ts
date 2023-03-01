import { Privileges } from 'src/app/Models/Privileges';
import { Ressources } from 'src/app/Models/Ressources';
export interface Permission{
    id:string;
    permissionname:string;
    ressources :[Ressources]
    privéleges :[Privileges]
}