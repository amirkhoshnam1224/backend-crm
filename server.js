const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // مسیر صحیح

const app = express();
const port = process.env.PORT || 5001;

// استفاده از middleware ها
app.use(cors());
app.use(express.json());

// اتصال به MongoDB
mongoose.connect('mongodb://localhost/crm', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// استفاده از مسیر کاربران
app.use('/api/users', userRoutes);

// شروع سرور
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
