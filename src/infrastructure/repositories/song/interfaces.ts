import { Song } from "../../../domain/models/song/song";
import { IRepository } from "../IRepository";

export interface ISongRepository<T extends Song> extends IRepository<T> {
}
