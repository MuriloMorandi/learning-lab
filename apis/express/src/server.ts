import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import todoRoutes from "./routes/todo.routes";
dotenv.config();


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(todoRoutes)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
