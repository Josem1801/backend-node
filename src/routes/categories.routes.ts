import express, { Request, Response } from "express";
const router = express.Router();

interface Biography {
  username: string;
  history: string;
  createdAt: string;

}

router.get("/", (req: Request, res: Response<Biography>) => {
	res.status(200).json({username: "all users", history: "this is my history", createdAt: "10-10-10"});
});

router.delete("/:id", (req, res) => {
	const {id} = req.query;

	res.send("mensaje añadido correactamente");
});
router.post("/");

export default router;