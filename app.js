const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route for the root path
app.get('/', (req, res) => {
    res.send('Hello, Jenkins CI/CD!');
});

// Route to handle GitHub webhook
app.post('/webhook', (req, res) => {
    console.log('Received a webhook request'); // Log when the request is received

    // Log the entire webhook payload
    console.log('Webhook payload:', JSON.stringify(req.body, null, 2));

    // Respond with a 200 OK status
    res.status(200).send('Webhook received');
});

// Start the server
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});





