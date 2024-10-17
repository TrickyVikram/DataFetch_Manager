const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/user-auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', (req, res, next) => {
    console.log('Auth API hit');
    next(); 
}, )

app.get('/test' ,(req,res) => {
res.send("test api is working")
});
   
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}}`);
});
