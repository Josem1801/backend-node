import express, { Request, Response } from "express";
const router = express.Router();

interface UserType {
  username: string;
  email: string;
  edad: number;
  id: number;
  name: string;  
}

router.get("/", (req: Request, res: Response) => {
	console.log(req.headers);
	res.status(200).json({name: "Joseito"});
});

router.delete("/:id", (req, res) => {
	const {id} = req.query;
	console.log(id);

	res.send("mensaje añadido correactamente");
});
router.post("/", (req,res: Response<UserType>) => {
  
	res.json({...req.body});
});

export default router;