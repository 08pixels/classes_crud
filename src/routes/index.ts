import { Router } from "express";
import { CreateCategoryController } from "../controller/category/CreateCategoryController";
import { ListCategoryController } from "../controller/category/ListCategoryController";
import { CreateClassController } from "../controller/class/CreateClassController";
import { ListClassController } from "../controller/class/ListClassController";
import { CreateTagController } from "../controller/tag/CreateTagController";
import { ListTagController } from "../controller/tag/ListTagController";

const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new ListCategoryController().handle);

routes.post('/tags', new CreateTagController().handle);
routes.get('/tags', new ListTagController().handle);

routes.get('/classes', new ListClassController().handle);
routes.post('/classes', new CreateClassController().handle);


export default routes;