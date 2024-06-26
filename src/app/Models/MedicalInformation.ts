import { User } from "./Role_User";
export interface MedicalInformation{
    id: number;
    registration_date: string;
    description: string;
    allergies: string;
    previous_surgeries: string;
    vaccinations: string;
    blood_type: string;
    patient:string;
}
