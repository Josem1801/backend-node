
import boom from "@hapi/boom";


function validatorHandler(schema, property: string){
	return (req, res, next) => {
		const data = req[property];

		const {error} = schema.validate(data);
		if(error){
			next(boom.badRequest(error.message));
		}
		next();
	};
}

export default validatorHandler;