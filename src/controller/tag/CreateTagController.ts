import { Request, Response } from "express";
import { CreateTagService } from "../../services/tag/CreateTagService";


export class CreateTagController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const service = new CreateTagService();

        const result = await service.execute({ name });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}