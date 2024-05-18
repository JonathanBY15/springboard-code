DROP DATABASE IF EXISTS hospital_db;
CREATE DATABASE hospital_db;

\c hospital_db;

-- doctors
CREATE TABLE doctors (
    doctor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20)
);

-- patients
CREATE TABLE patients (
    patient_id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20)
);

-- diseases
CREATE TABLE diseases (
    disease_id SERIAL PRIMARY KEY,
    disease_name VARCHAR(60),
    description TEXT
);

-- visits
CREATE TABLE visits (
    visit_id SERIAL PRIMARY KEY,
    doctor_id INT REFERENCES doctors(doctor_id),
    patient_id INT REFERENCES patients(patient_id),
    visit_date TIMESTAMP,
    notes TEXT
);

-- diagnoses
CREATE TABLE diagnoses (
    diagnosis_id SERIAL PRIMARY KEY,
    visit_id INT REFERENCES visits(visit_id),
    disease_id INT REFERENCES diseases(disease_id),
    diagnosis_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
