import {Model, DataTypes, Sequelize} from "sequelize";

const USER_TABLE = "users";

const UserSchema = {
	id: {
		allowNull: false, 
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER
	}, 
	email: {
		allowNull: false,
		type: DataTypes.STRING,
		unique: true
	},
	password: {
		allowNull: false,
		type: DataTypes.STRING
	},
	createdAt: {
		allowNull: false,
		type: DataTypes.DATE,
		field: "created_at", 
		defaultValue: Sequelize.fn("NOW")
	}
};


class  User extends Model {
	static associate(){
		//associate
	}

	static config(sequelize: Sequelize){
		return {
			sequelize, 
			tableName: USER_TABLE,
			modelName: "User",
			timestamps: false
		};
	}
}
export {
	User, UserSchema
};