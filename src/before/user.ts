import Database from "./database"

// DI対応前
export default class User {
  userId: number = 0
  userName: string = "ryu"

  saveUser() {
    if (this.userId) {
      // Databaseクラスをインスタンス化
      // この方法だと、UserクラスがDatabaseクラスに依存してしまう
      const database = new Database()
      database.saveUser(this)
    }
  }
}