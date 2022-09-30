import axios from "axios";
class AlbumsApiClass {
  async getArtistAlbums(param: { artiste: string; limit?: number }) {
    return new Promise((resolve, reject) => {
      const url = `https://itunes.apple.com/search?country=GH&entity=album&attributes=albumTerm&term=${
        param.artiste
      }&limit=${param?.limit ?? 3}`;
      axios
        .get(url, { method: "get" })
        .then((res) => {
          const data = res.data.results;
          resolve(data);
        })
        .catch((err: any) => reject(err.message));
    });
  }
}

export const AlbumsAPI = new AlbumsApiClass();
