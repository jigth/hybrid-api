import { IRepository } from "../IRepository";
import { Instrument } from "../../../domain/models/instrument/instrument";
import { _db } from "../../inmemory/_db";
import { IInstrumentRepository } from "./interfaces";

class InstrumentRepository implements IRepository<Instrument>, IInstrumentRepository<Instrument> {
    getAll(): Instrument[] {
        return _db.instruments;
    }

    getById(id: string): Instrument | null {
        return _db.instruments.find((i: any) => i.id === id, null);
    }

    getByType(type: string): Instrument[] {
        return _db.instruments.filter((i: any) => i.type === type, []);
    }

    getByName(name: string): Instrument[] {
        return _db.instruments.filter((i: any) => i.name === name, []);
    }

    addInstrument(newInstrument: Instrument) {
        _db.instruments.push(newInstrument);
    }
}

// Singleton
const instrumentRepository = new InstrumentRepository();
export { instrumentRepository };
