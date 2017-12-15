const bodyParser = require('body-parser')
const express = require('express');
const path = require('path');
const routes = require('./routes/boardRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// Load routes
routes(app);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
