export abstract class BaseRepository<IData> {
  model: any;

  constructor(model: any) {
    this.model = model;
  }

  abstract getAllDocs(): Promise<IData[]>;

  abstract getDocumentByQuery(query: { [key: string]: any }): Promise<IData>;

  abstract addDocument(document: IData): Promise<void>;
}
