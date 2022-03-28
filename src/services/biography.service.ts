
import { BiographyType } from "../routes/biography.routes";
import {sequelize} from "lib/sequelize";
import { QueryTypes } from "sequelize/types";


class BiographyService{
	biography: BiographyType[];
	constructor(){
		this.biography = [];
		this.generate();
	}
	generate(){
		const limit = 10;
		for (let index = 0; index < limit; index++) {
			this.biography.push({id: `${index}`,history: `This is the history ${index}`, username: `User ${index}`, createdAt: "10-10-10"});
		}
	}
	create(newBiography: BiographyType){
		this.biography.push({id: `${this.biography.length}` , ...newBiography});
		return newBiography;
	}
	async find(){
		const query = "SELECT * FROM biographys";
		const [data] = await sequelize.query(query);
		return data;
	}
	findOne(id: string){
		return this.biography.find(({id: idBiography}) => idBiography === id);
	}
	update(id: string, biographyToUpdate: BiographyType){
		const bioIndex = this.biography.findIndex(bio => bio.id === id);
		if(bioIndex == -1) throw new Error("not found");
		this.biography[bioIndex] = biographyToUpdate;
		return this.biography[bioIndex];
	}
	delete(id: string){
		return this.biography.filter(({id: bioId}) => bioId !== id);
	}
}
export {BiographyService};
