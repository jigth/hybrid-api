import { Performer } from "../../../domain/models/performer/performer";
import { _db } from "../../inmemory/_db";
import { IRepository } from "../IRepository";

class PerformerRepository implements IRepository<Performer> {
    getAll(): Performer[] {
        return _db.performers;
    }
    getById(id: string): Performer | null {
        return _db.performers.find(p => p.id === id);
    }
}

// Singleton
const performerRepository = new PerformerRepository();
export { performerRepository };
