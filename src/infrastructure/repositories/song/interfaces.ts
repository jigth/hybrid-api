import { RepoTypes } from "../../../domain/models/shared/repository/repository";
import { IRepository } from "../IRepository";

export interface ISongRepository<T extends RepoTypes> extends IRepository<T> {
}
