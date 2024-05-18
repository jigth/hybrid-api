import { Performer } from "../../../domain/models/performer/performer";
import { IRepository } from "../IRepository";

export interface IPerformerRepository<T extends Performer> extends IRepository<T> {
}
