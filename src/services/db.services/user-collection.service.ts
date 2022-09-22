import { UserModel } from "../../db";
import { IUser } from "../../util/types";
import { Collection } from "./collections.service";

class UserCollectionClass implements Collection<IUser> {
  model: typeof UserModel;

  constructor() {
    this.model = UserModel;
  }

  async getAllDocs(): Promise<IUser[]> {
    const results = (await this.model.find()) as IUser[];
    return results;
  }

  async getDocumentByQuery(query: { [key: string]: any }): Promise<IUser> {
    const document = (await this.model.findOne(query)) as IUser;
    return document;
  }

  async addDocument(document: IUser): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.model.create(document, function (err: any, _) {
          if (err) reject(err);
          else resolve();
        });
      } catch (error: any) {
        reject(error);
      }
    });
  }
}

export const UserCollection = new UserCollectionClass();
