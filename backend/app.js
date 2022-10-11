import express, { application } from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog_routes';
import router from "./routes/routes"

const app = express();

app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect('mongodb+srv://corey:corey@blogwm.iiamxai.mongodb.net/?retryWrites=true&w=majority')
.then(()=>app.listen(3000))
.then(()=>console.log("Connected to Database and Listening to Local Host 3000"))
.catch((err)=>console.log(err));
