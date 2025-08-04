const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./api/v1/routes/auth.routes');
const errorMiddleware = require('./api/v1/middlewares/error.middleware');

app.use(express.json());
app.use(cors());

// 🔍 Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date(),
    message: "Server is healthy",
  });
});

app.use('/api/v1/auth',router);

app.use((req,res)=> res.status(400).json({message: "route not found!"}));

app.use(errorMiddleware);

module.exports = app;

