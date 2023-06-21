const express = require('express');

const app = express();
//settings
app.set('port', process.env.PORT || 3000);
//staring the server
app.listen(app.get('port'), () => {
  console.log('Server running on port', app.get('port'));
}); 