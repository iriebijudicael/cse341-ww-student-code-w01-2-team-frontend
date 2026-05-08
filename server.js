import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8080;

app.use(cors()); // Allow the frontend to talk to the backend
app.use(express.json());


// GET endpoint required by the assignment
app.get('/api/data', (req, res) => {
    res.status(200).json(frontendData);
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});