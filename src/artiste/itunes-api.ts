import { HttpClient } from "../core/http-client";

class ITunesApiClass {
  async getArtistAlbums(param: { artiste: string; limit?: number }) {
    return new Promise((resolve, reject) => {
      const url = `https://itunes.apple.com/search?country=GH&entity=album&attributes=albumTerm&term=${
        param.artiste
      }&limit=${param?.limit ?? 3}`;
      HttpClient.get(url)
        .then((res) => {
          const data = res.data.results;
          resolve(data);
        })
        .catch((err: any) => reject(err.message));
    });
  }
}

export const ITunesApi = new ITunesApiClass();
