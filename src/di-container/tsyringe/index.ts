import 'reflect-metadata'
import { container } from "tsyringe";
import Database from "./database";
import User from "./user";

container.register("IDatabase", { useClass: Database });

export const user = container.resolve(User)

user.userId = 100
user.userName = "takagaki"
user.saveUser()