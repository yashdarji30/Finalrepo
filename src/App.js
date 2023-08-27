import React from 'react';
import MedicineList from './components/MedicineList';
import MedicineForm from './components/MedicineForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Medicine Stock Management</h1>
      <MedicineForm />
      <MedicineList />
    </div>
  );
}

export default App;
