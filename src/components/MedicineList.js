import React, { useState, useEffect } from 'react';
import api from '../services/api';

function MedicineList() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetchMedicines();
  }, []);

  async function fetchMedicines() {
    try {
      const response = await api.get('/medicines');
      setMedicines(response.data);
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  }

  return (
    <div>
      <h2>Medicines</h2>
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine._id}>{medicine.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MedicineList;
