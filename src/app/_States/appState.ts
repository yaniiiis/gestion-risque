// export enum ActionsTypes {

//     UPDATEROLE = "[ROLE] UPDATE ROLE",
  
   
// }

// export interface ActionEvent {
//     type: ActionsTypes,
//     payload ?: any
// }




export enum DataStateEnum {

    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState<T> {
 
    dataState?:DataStateEnum,
    data?:T,
    erroMessage?:string
}