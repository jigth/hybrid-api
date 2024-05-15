import { RepoTypes } from "../../../domain/models/shared/repository/repository";
import { IRepository } from "../IRepository";

export interface IInstrumentRepository<T extends RepoTypes> extends IRepository<T> {
    getByName(name: string): T[];
    getByType(type: string): T[];
}
