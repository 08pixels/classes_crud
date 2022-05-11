import { Request, Response } from "express";
import { CreateClassService } from "../../services/class/CreateClassService";


export class CreateClassController {
    async handle(request: Request, response: Response) {
        const { name, description, category_id, tags_id } = request.body;

        const service = new CreateClassService();
        const result = await service.execute({
            name,
            description,
            category_id,
            tags_id
        });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}