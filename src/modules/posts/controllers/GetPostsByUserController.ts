import { Request, Response } from 'express';
import { container } from 'tsyringe';
import GetPostByUserService from '../services/GetPostByUserService';

class GetPostsByUserController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;
    const getPostsByUserService = container.resolve(GetPostByUserService);

    const posts = await getPostsByUserService.execute(userId);

    return response.json(posts);
  }
}

export default GetPostsByUserController;
