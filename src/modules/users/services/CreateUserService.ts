import { User } from '@models/User';
import { injectable } from 'tsyringe';


@injectable()
class CreateUserService {
  async execute({ name, username }: Omit<User, 'createdAt'>) {
    const checkUserExists = await User.findOne({ username });

    if (checkUserExists) {
      throw new Error('User already exists');
    }

    const user = await User.create({
      name,
      username,
    });
    
    return user;
  }
}

export { CreateUserService };

