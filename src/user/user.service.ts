import { UserException } from "./user-exception";
import { UserRepository } from "./user.repository";

class UserServiceClass {
  async createUser(params: { username: string; score: number; color: string }) {
    const user = await UserRepository.getDocumentByQuery({
      username: params.username,
    });
    if (user) {
      throw new UserException(
        `createUser: Username ${params.username} already exists`
      );
    }
    await UserRepository.addDocument(params);
  }

  async getUsers() {
    try {
      const data = await UserRepository.getAllDocs();
      return data;
    } catch (error: any) {
      throw new UserException(`getUser: ${error.message}`);
    }
  }
}

export const UserService = new UserServiceClass();
