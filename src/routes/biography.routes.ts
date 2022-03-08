import express, {  Response } from "express";
const router = express.Router();
import {BiographyService} from "services/biography.service";
import validatorHandler from "middlewares/validator.handler";
import {createBiographySchema, updateBiographySchema,getBiographySchema} from "schema/biography.schema";
export interface BiographyType {
  id: string;
  username: string;
  history: string;
  createdAt: string;
}


const service = new BiographyService();

router.get("/", (req, res: Response<BiographyType[]>) => {
	const biographys = service.find();
	res.json(biographys);
});
router.get("/:id", 
	validatorHandler(getBiographySchema, "params")
	,(req, res) => {
		const {id} = req.params;
		const biography = service.findOne(`${id}`);
		res.json(biography);
	});
router.patch("/:id",validatorHandler(getBiographySchema, "params") ,validatorHandler(updateBiographySchema, "body"), (req,res) => {
	const {id} = req.params;
	const updatedBio = service.update(id, req.body);
	res.json(updatedBio);
});

router.post("/", validatorHandler(createBiographySchema, "body") ,(req, res) => {
	const bio = service.create(req.body);
	res.json(bio);
});

router.delete("/:id", validatorHandler(getBiographySchema, "params"), (req,res) => {
	const {id} = req.params;
	const deleted = service.delete(id);
	res.json(deleted);
});

export default router;