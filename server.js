import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8080;

app.use(cors()); // Allow the frontend to talk to the backend
app.use(express.json());


// GET endpoint required by the assignment
app.get('/', showHomePage);
// router.get('/', showHomePage);

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});