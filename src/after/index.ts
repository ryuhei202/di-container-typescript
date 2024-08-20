import Database from "./database";
import User from "./user";

const database = new Database();
const user = new User(database)
user.userId = 100
user.userName = "takagaki"
user.saveUser()