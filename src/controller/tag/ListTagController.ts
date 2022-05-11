import { Request, Response } from "express";
import { ListTagService } from "../../services/tag/ListTagService";

export class ListTagController {
    async handle(request: Request, response: Response) {
        const service = new ListTagService();
        const result = service.execute();

        return response.json(result);
    }
}