import { EntityRepository, Repository } from "typeorm";
import User from "../entities/User";

@EntityRepository(User)
class UserRepositry extends Repository<User> {}

export default UserRepositry;
