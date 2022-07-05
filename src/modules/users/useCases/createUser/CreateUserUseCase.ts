import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name }: IRequest): User {
    const user = this.usersRepository.create({ name });
    return user;
  }
}

export { CreateUserUseCase };
