const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/medicine_stock', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Medicine = mongoose.model('Medicine', {
  name: String,
});

app.get('/api/medicines', async (req, res) => {
  const medicines = await Medicine.find();
  res.json(medicines);
});

app.post('/api/medicines', async (req, res) => {
  const { name } = req.body;
  const medicine = new Medicine({ name });
  await medicine.save();
  res.status(201).json(medicine);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
