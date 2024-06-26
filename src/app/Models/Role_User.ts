import { LoginComponent } from "../Components/login/login.component"

export interface User{
id:number
username:string
password:string
enabled:boolean
fullname:string
phone_number:number
city:string
gender:string
speciality:string
}
export interface Role{
    id:number
    rol:string
    username:string
}