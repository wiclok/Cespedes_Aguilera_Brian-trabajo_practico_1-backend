require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// testeo de conexion a la base de datos
const sequelize = require('./relaciones');

sequelize
  .authenticate()
  .then(() => console.log('Base de datos conectada'))
  .catch((err) => {
    console.log(err);
    process.exit();
  });

// Middleware

app.use(express.json());
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(morgan('dev'));

// Routes

app.use(require('./Routes/routes.router'));

// Starting the server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
