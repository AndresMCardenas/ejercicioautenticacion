const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  // base en mongo Cooprofesores
  mongodb: {
    URI: process.env.URI
  }
};
