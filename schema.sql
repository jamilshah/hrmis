CREATE TABLE designations (
    designation_id SERIAL PRIMARY KEY,
    designation_name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE facilities (
    facility_id SERIAL PRIMARY KEY,
    facility_name VARCHAR(255) UNIQUE NOT NULL,
    facility_type VARCHAR(255) NOT NULL,
    location VARCHAR(255)
);

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    cnic VARCHAR(15) UNIQUE NOT NULL,
    date_of_birth DATE,
    gender VARCHAR(10),
    contact_number VARCHAR(20),
    email VARCHAR(255) UNIQUE,
    address TEXT,
    emergency_contact_name VARCHAR(255),
    emergency_contact_number VARCHAR(20),
    designation_id INTEGER REFERENCES designations(designation_id),
    facility_id INTEGER REFERENCES facilities(facility_id),
    date_of_joining DATE,
    medical_council_registration VARCHAR(255),
    qualifications JSONB -- Use JSONB to store an array of qualifications
);