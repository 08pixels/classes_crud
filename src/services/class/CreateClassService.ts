import { AppDataSource } from "../../data-source";
import { Category } from "../../entity/Category";
import { Class } from "../../entity/Class";
import { Tag } from "../../entity/Tag";

type ClassRequest = {
    name: string;
    description: string;
    category_id: number;
    tags_id: number[];
}

export class CreateClassService {

    async execute({ name, description, category_id, tags_id }: ClassRequest): Promise<Class | Error> {
        const repoClass = AppDataSource.getRepository(Class);
        const repoCategory = AppDataSource.getRepository(Category);

        if (!await repoCategory.findOneBy({ id: category_id })) {
            return new Error("Category does not exists");
        }

        if (!name) {
            return new Error("The name to class is required");
        }

        const classData = repoClass.create({
            name,
            description,
            category_id
        });

        classData.tags = await this.tagValidation(tags_id);

        await repoClass.save(classData);
        return classData;
    }

    async tagValidation(tags_id: number[]) {
        const repoTag = AppDataSource.getRepository(Tag);
        const tagsResult = []

        for await (const tagId of tags_id) {
            const result = await repoTag.findOneBy({ id: tagId })
            tagsResult.push(result)
        }

        const validTags = tagsResult.filter(async (tag) => (await tag) !== null);
        return validTags
    }
}