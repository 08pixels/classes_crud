import { AppDataSource } from "../../data-source";
import { Tag } from "../../entity/Tag";


export class ListTagService {
    async execute() {
        const tagsRepository = AppDataSource.getRepository(Tag);
        const result = await tagsRepository.find();

        return result;
    }
}