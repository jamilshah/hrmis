export type Employee = {
    employee_id: number;
    full_name: string;
    cnic: string;
    date_of_birth: string; // Or Date object, depending on your data
    gender: string;
    contact_number: string;
    email: string;
    address: string;
    emergency_contact_name: string;
    emergency_contact_number: string;
    designation_id: number;
    facility_id: number;
    date_of_joining: string; // Or Date object
    medical_council_registration: string;
    qualifications: any[]; // Or a more specific type if you have one
  };