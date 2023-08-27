// src/components/Medicine.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Medicine from './Medicine';

test('renders medicine details correctly', () => {
  const medicineName = 'Paracetamol';
  const medicineQuantity = 100;

  const { getByText } = render(
    <Medicine name={medicineName} quantity={medicineQuantity} />
  );

  const nameElement = getByText(medicineName);
  const quantityElement = getByText(`Quantity: ${medicineQuantity}`);

  expect(nameElement).toBeInTheDocument();
  expect(quantityElement).toBeInTheDocument();
});
