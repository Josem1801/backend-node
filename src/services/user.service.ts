

import { sequelize } from "lib/sequelize";
import Boom from "boom";

class UserService{
	async create(user){
		const newUser = await sequelize.models.User.create(user);
		return newUser;
	}
	async find(){
		const res = await sequelize.models.User.findAll();
		return res;
	}
	async findOne(id): Promise<any>{
		const user = await sequelize.models.User.findByPk(id);
		if(!user) throw Boom.notFound("User not found");
		return user;
	}
	async update(id :string, changes){
		const user = await this.findOne(id);
		const res = await user.update(changes);
		return res;
	}
	async delete(id){
		const user = await this.findOne(id);
		await user.destroy();
		return id;
	}
}
export {UserService};