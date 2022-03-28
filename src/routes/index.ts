import express from "express";
import { Express } from "express";
import userRouter from "./user.routes";
import biographyRouter from "./biography.routes";
import categoriesRouter from "./categories.routes";

function routerApi(app: Express){
	const router = express.Router();
	app.use("/api/v1", router);
	router.use("/biographys", biographyRouter);
	router.use("/users",userRouter );
	router.use("/categories", categoriesRouter);

}

export {routerApi};