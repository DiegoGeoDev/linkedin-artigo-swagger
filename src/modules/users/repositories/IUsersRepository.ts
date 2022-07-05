import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
}

interface IUsersRepository {
  create({ name }: ICreateUserDTO): User;
  list(): User[];
}

export { IUsersRepository, ICreateUserDTO };
