import { db } from "../db";
import { IUser } from "../models/IUsuario";

export class UserService {

  creatUser(body: IUser): IUser {
    const user: IUser = {
      id: db[db.length - 1].id + 1,
      name: body.name,
      email: body.email
    }
    db.push(user);
    return user
  }

  getAllUser(): IUser[] {
    return db;
  }

  deleteUser(user: IUser): IUser[] {
    let iterator = 0;
    for (const item of db) {
      if(user.name == item.name || user.id == item.id) {
        db.splice(iterator, 1);
      }
      iterator++;
    }
    return db
  }
}