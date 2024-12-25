import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  // Your PostgreSQL connection configuration
  user: 'jamil',
  host: 'localhost', // Or your database host
  database: 'hrmis',
  password: 'stmax', 
  port: 5432, // Default PostgreSQL port
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        const { rows } = await pool.query('SELECT * FROM employees');
        res.status(200).json(rows);
        break;

      case 'POST':
        const {
          full_name,
          cnic,
          date_of_birth,
          gender,
          contact_number,
          email,
          address,
          emergency_contact_name,
          emergency_contact_number,
          designation_id,
          facility_id,
          date_of_joining,
          medical_council_registration,
          qualifications,
        } = req.body;
        const result = await pool.query(
          'INSERT INTO employees (full_name, cnic, date_of_birth, gender, contact_number, email, address, emergency_contact_name, emergency_contact_number, designation_id, facility_id, date_of_joining, medical_council_registration, qualifications) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
          [
            full_name,
            cnic,
            date_of_birth,
            gender,
            contact_number,
            email,
            address,
            emergency_contact_name,
            emergency_contact_number,
            designation_id,
            facility_id,
            date_of_joining,
            medical_council_registration,
            qualifications,
          ]
        );
        res.status(201).json(result.rows[0]);
        break;

      default:
        res.status(405).end(); // Method Not Allowed
        break;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}