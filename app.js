
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
    // Log the webhook payload
    console.log('Webhook received:', req.body);

    // Respond with a 200 OK status
    res.status(200).send('Webhook received');
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});




