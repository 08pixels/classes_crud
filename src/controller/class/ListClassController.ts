import { Request, Response } from "express";
import { ListClassService } from "../../services/class/ListClassService";

export class ListClassController {
    async handle(request: Request, response: Response) {
        const service = new ListClassService();
        const result = await service.execute();

        return response.json(result);
    }
}