const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

// Home route (UI)
app.get("/", (req, res) => {
    const time = new Date().toLocaleString();
    const hostname = os.hostname();

    res.send(`
        <h1>Cloud App Dashboard</h1>
        <p><b>Status:</b> Running Successfully</p>
        <p><b>Server Time:</b> ${time}</p>
        <p><b>Hostname:</b> ${hostname}</p>

        <hr>
        <h3>Available Routes:</h3>
        <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/api">API Data</a></li>
        </ul>
    `);
});

// About route
app.get("/about", (req, res) => {
    res.send(`
        <h2>About This Project</h2>
        <p>This is a cloud deployed Node.js application.</p>
        <p>Created for DCC LCA-2.</p>
        <a href="/">Go Back</a>
    `);
});

// API route (important for viva)
app.get("/api", (req, res) => {
    res.json({
        message: "Cloud API Working",
        time: new Date(),
        status: "success"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});