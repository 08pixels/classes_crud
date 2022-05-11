import { AppDataSource } from "../../data-source";
import { Tag } from "../../entity/Tag";


type TagRequest = {
    name: string;
}

export class CreateTagService {
    async execute({ name }: TagRequest): Promise<Tag | Error> {
        const repo = AppDataSource.getRepository(Tag);

        if (await repo.findOneBy({ name })) {
            return new Error("Tag already exists");
        }

        const tag = repo.create({
            name
        });

        await repo.save(tag);

        return tag;
    }
}