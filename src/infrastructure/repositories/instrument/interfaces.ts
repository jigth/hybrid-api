import { Instrument } from "../../../domain/models/instrument/instrument";
import { IRepository } from "../IRepository";

export interface IInstrumentRepository<T extends Instrument> extends IRepository<Instrument> {
    getByName(name: string): T[];
    getByType(type: string): T[];
}
