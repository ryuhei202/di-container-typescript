import { inject, injectable } from "inversify";
import { TYPES } from "./types"

// データベースクラスのインターフェース
export interface IDatabase {
  saveUser: (user: User) => void;
}

// ユーザークラスは依存注入されることをデコレーションで示す
@injectable()
export default class User {
  userId: number = 0
  userName: string = "ryu"

  constructor(
    // 初期化の際にデータベースクラスを注入する
    @inject(TYPES.IDatabase) private database: IDatabase) { }

  saveUser() {
    if (this.userId) {
      this.database.saveUser(this)
    }
  }
}