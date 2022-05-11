import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

export class ListCategoryController {
    async handle(request: Request, response: Response) {
        const service = new ListCategoryService();
        const result = await service.execute();

        return response.json(result);
    }
}