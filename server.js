const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // مسیر صحیح

const app = express();
const port = process.env.PORT || 5002;

// استفاده از middleware ها
app.use(cors());
app.use(express.json());

// اتصال به MongoDB
mongoose.connect('mongodb+srv://amirkhoshnam1224:kR1JOV1zEqpPM5zQ@cluster0.06mn0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.log('MongoDB Atlas connection error:', err));

// استفاده از مسیر کاربران
app.use('/api/users', userRoutes);

// شروع سرور
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
