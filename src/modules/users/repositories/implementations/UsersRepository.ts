import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
    });

    this.users.push(user);

    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
