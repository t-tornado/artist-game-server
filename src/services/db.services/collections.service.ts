export abstract class Collection<IData> {
  model: any;

  constructor(model: any) {
    this.model = model;
  }

  async getAllDocs(): Promise<IData[]> {
    const data = [] as IData[];
    return data;
  }

  async getDocumentByQuery(query: { [key: string]: any }): Promise<IData> {
    const data = {} as IData;
    return data;
  }

  async addDocument(document: IData): Promise<void> {
    return;
  }
}
