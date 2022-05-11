import { AppDataSource } from "../../data-source";
import { Class } from "../../entity/Class";


export class ListClassService {
    async execute() {
        const classRepository = AppDataSource.getRepository(Class);
        const result = await classRepository.find({
            relations: ['category', 'tags']
        });

        return result;
    }
}