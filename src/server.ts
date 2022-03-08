import express from "express";
import { routerApi } from "./routes";
const app = express();
import {boomErrorHandler, errorHandler, logErrors} from "middlewares/error.handler";
//Midlewares
app.use(express.json());
routerApi(app);



app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


//port
app.listen( 3000);

console.log("La aplicacion esta escuchando en http://localhost:3000");
