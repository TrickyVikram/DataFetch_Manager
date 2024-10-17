const express = require('express');

const usersRoutes = require('./routes/users');
const app = express();


const PORT = process.env.PORT || 5000;

app.use(express.json());



app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the API!' });
});


app.use("/api/users",usersRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


