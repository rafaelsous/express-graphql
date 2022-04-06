import GetPostsByUserController from '@modules/posts/controllers/GetPostsByUserController';
import CreateUserController from '@modules/users/controllers/CreateUserController';
import { Router } from 'express';

const routes = Router();

const createUserController = new CreateUserController();
const getPostsByUserController = new GetPostsByUserController();

routes.post('/users', createUserController.handle);
routes.get('/users/:userId/posts', getPostsByUserController.handle);

export { routes };

