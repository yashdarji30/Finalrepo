import React, { useState } from 'react';
import api from '../services/api';

function MedicineForm() {
  const [name, setName] = useState('');

  async function addMedicine() {
    try {
      await api.post('/medicines', { name });
      setName('');
    } catch (error) {
      console.error('Error adding medicine:', error);
    }
  }

  return (
    <div>
      <h2>Add Medicine</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Medicine name"
      />
      <button onClick={addMedicine}>Add</button>
    </div>
  );
}

export default MedicineForm;
