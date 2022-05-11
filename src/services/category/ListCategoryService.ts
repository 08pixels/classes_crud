import { AppDataSource } from "../../data-source";
import { Category } from "../../entity/Category";


export class ListCategoryService {
    async execute() {
        const tagsRepository = AppDataSource.getRepository(Category);
        const result = await tagsRepository.find();

        return result;
    }
}