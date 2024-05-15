import { RepoTypes } from "../../domain/models/shared/repository/repository";

// In this case I am using generics extending specific types to allow a range of types but keep constraints defined.
export interface IRepository<T extends RepoTypes> {
    getAll(): T[];
    getById(id: string): T | null;
}
