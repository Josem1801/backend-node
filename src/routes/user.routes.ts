import express, { Request, Response } from "express";
import validatorHandler from "middlewares/validator.handler";
import {createUserSchema, updateUserSchema} from "schema/user.schema";
import {UserService} from "services/user.service";

const router = express.Router();
const service = new UserService();

export interface UserType {
  username: string;
  email: string;
  edad: number;
  id: number;
  name: string;  
}
router.get("/", async (req: Request, res: Response, next) => {
	try {
		const users = await service.find();
		res.json(users);
	} catch (error) {
		next(error);
	}
});
router.get("/:id", async (req: Request, res: Response, next) => {
	try {
		const {id} = req.params;

		const users = await service.findOne(id);
		res.json(users);
	} catch (error) {
		next(error);
	}
});
router.delete("/:id",async  (req, res: Response, next) => {
	const {id} = req.params;
	try {
		const serviceResponse = await service.delete(id);
		res.json(serviceResponse);
	} catch (error) {
		next(error);
	}
});
router.post("/",	validatorHandler(createUserSchema, "body"), async (req,res: Response, next) => {
	try {
		const body = req.body;
		const serviceResponse = await service.create(body);
		res.json(serviceResponse);
	} catch (error) {
		next(error);
	}
});
router.put("/:id", validatorHandler(updateUserSchema, "body"), async (req: Request, res: Response, next) => {
	try{
		const body = req.body;
		const {id} = req.params;
		const serviceResponse = await service.update(id, body);
		res.json(serviceResponse);
	}catch(error){
		next(error);
	}
});
export default router;