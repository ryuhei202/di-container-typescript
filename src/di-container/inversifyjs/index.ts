import { Container } from "inversify";
import "reflect-metadata";
import Database from "./database";
import { TYPES } from "./types";
import User from "./user";

const container = new Container()

container.bind<Database>(TYPES.IDatabase).to(Database)
container.bind<User>(TYPES.User).to(User)

const user = container.get<User>(TYPES.User)

user.userId = 100
user.userName = "takagaki"
user.saveUser()

console.log(user)