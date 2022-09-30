import axios from "axios";

export class HttpClient {
  public static async get(url: string): Promise<any> {
    return axios.get(url, { method: "get" });
  }
}
