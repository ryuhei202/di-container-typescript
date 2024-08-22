import { injectable } from "inversify";
import User, { IDatabase } from "./user";


@injectable()
export default class Database implements IDatabase {
  saveUser(user: User) {
    console.log(`Saved ${user.userName}! from tsyringe DI`);
  }
}