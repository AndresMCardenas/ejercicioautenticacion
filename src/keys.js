const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  // base en mongo Cooprofesores
  mongodb: {
    URI: process.env.URI
  }
};
//export const URI = process.env.URI;
//export const PORT = process.env.PORT || 3000;