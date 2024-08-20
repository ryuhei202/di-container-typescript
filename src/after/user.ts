import Database from "./database"

// DI対応後
export default class User {
  userId: number = 0
  userName: string = "ryu"

  // Databaseクラスをコンストラクタで受け取る
  // 注入(injection)される
  constructor(private database: Database) { }
  saveUser() {
    if (this.userId) {
      // 依存性の注入されたDatabaseクラスを利用
      this.database.saveUser(this)
    }
  }
}