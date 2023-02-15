import express, { Application } from "express";
// importing router from crud.ts
import { router } from "./routes/crud";

// making app to express();
const app: Application = express();
// making a port number
const PORT: number = 3000;

// using express.json() for post request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// assigning a route here
app.use("/testing_router", router);

// listening port here
app.listen(PORT, (): void => {
  console.log(`http://localhost:${PORT}`);
});

export {app};
