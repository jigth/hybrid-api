import { Song } from "../../../domain/models/song/song";
import { _db } from "../../inmemory/_db";
import { IRepository } from "../IRepository";

class SongRepository implements IRepository<Song> {
    getAll(): Song[] {
        return _db.songs
    }
    getById(id: string): Song {
        return _db.songs.find(s => s.id === id)
    }
}

// Singleton
const songRepository = new SongRepository()
export {
    songRepository
}