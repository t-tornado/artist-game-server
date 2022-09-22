import { UserCollection } from "./db.services/user-collection.service";

class UserServiceClass {
  async createUser(params: { username: string; score: number; color: string }) {
    try {
      const user = await UserCollection.getDocumentByQuery({
        username: params.username,
      });
      if (user) {
        throw new Error(`Username ${params.username} already exists`);
      }
      await UserCollection.addDocument(params);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getUsers() {
    try {
      const data = await UserCollection.getAllDocs();
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export const UserService = new UserServiceClass();
