import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv";

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5001
console.log(process.env.MONGO_URI)
// Middleware to parse JSON
app.use(express.json());

// Connect to the database
connectDB();

// Fix the route path (remove the dot!)
app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("Server started on port 5001");
});
