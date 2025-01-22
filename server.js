const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const channelRoutes = require("./routes/ChannelRutes")
const app = express();
const port = process.env.PORT || 5002;


app.use(cors());
app.use(express.json());

app.use("/api/channels", channelRoutes);
mongoose.connect('mongodb+srv://amirkhoshnam1224:kR1JOV1zEqpPM5zQ@cluster0.06mn0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("MongoDB Atlas connection error:", err));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



 








