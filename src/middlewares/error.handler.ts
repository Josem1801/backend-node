import Boom from "boom";
import {Request, Response, NextFunction, ErrorRequestHandler} from "express";
function logErrors(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
	console.log(err);
	next(err);
}

function errorHandler(err: Boom, req: Request, res: Response, next: NextFunction){
	
	res.status(500).json({
		message: err.message,
		stack: err.stack
	});
}

function boomErrorHandler(err: Boom, req: Request, res: Response, next: NextFunction){
	if(err.isBoom){
		const {output} = err;
		res.status(output.statusCode).json(output.payload);
	}
	next(err);
	res.status(500).json({
		message: err.message,
		stack: err.stack
	});
}

export {logErrors, errorHandler, boomErrorHandler};