import { Request, Response } from "express";
import UsersService from "../services/UsersService";

interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
}

interface IUserLogin {
  id: string;
  email: string;
  password?: string;
  name: string;
}

interface ILogin {
  user: IUserLogin;
  token: number | string;
}

class UsersController {
  async store(req: Request, res: Response) {
    const { email, password, name } = req.body;

    const user = (await UsersService.create({
      email,
      password,
      name,
    })) as unknown as IUser;

    if (!user.id) {
      res.status(400).json(user);
    }

    if (user["error"]) {
      return res.status(400).json(user);
    }

    return res.json(user);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const login = (await UsersService.authenticate(
      email,
      password
    )) as unknown as ILogin;

    if (!login.token) {
      return res.status(401).json(login);
    }

    if (login["error"]) {
      return res.status(400).json(login);
    }

    return res.json(login);
  }
}

export default new UsersController();
