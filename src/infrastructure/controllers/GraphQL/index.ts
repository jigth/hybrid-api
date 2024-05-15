import { Router } from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { instrumentRepository } from "../../repositories/instrument/instrument";
import { performerRepository } from "../../repositories/performer/performer";
import { songRepository } from "../../repositories/song/song";
import { IInstrumentRepository } from "../../repositories/instrument/interfaces";
import { RepoTypes } from "../../../domain/models/shared/repository/repository";
import { ISongRepository } from "../../repositories/song/interfaces";
import { IPerformerRepository } from "../../repositories/performer/interfaces";

// Here I make the controller code dependent on interfaces. The initialization part may change as needed.
// The fact that this controller is dependent on interfaces instead of implementations helps keeping code more decoupled.
const instrumentsRepo: IInstrumentRepository<RepoTypes> = instrumentRepository
const performersRepo: IPerformerRepository<RepoTypes> = performerRepository
const songsRepo: ISongRepository<RepoTypes> = songRepository

const graphqlRouter: Router = Router();

// For now I am not using classes in this router to keep the code simpler because it is short enough
graphqlRouter.use(
    "/",
    graphqlHTTP({
        schema: buildSchema(`#graphql
            type Instrument {
                name: String!
                type: String!
            }

            type Performer {
                id: String!
                name: String!
                genre: String!
                age: Int!
                instruments_ids: [String!]
            }

            type Song {
                id: String!
                name: String!
                genre: String!
                performer_id: String
            }

            type Query {
                instruments: [Instrument!]!,
                instrumentById(id: String!): Instrument!
                instrumentsByName(name: String!): [Instrument!]!
                instrumentsByType(type: String!): [Instrument!]!

                performers: [Performer!]!
                performerById: [Performer!]!

                songs: [Song!]!
                songById: [Song!]!
            }
        `),
        rootValue: {
            // Instruments
            instruments: () => instrumentsRepo.getAll(),
            instrumentById: (args: any) => {
                return instrumentsRepo.getById(args.id)
            },
            instrumentsByName: (args: any) => {
                return instrumentsRepo.getByName(args.name)
            },
            instrumentsByType: (args: any) => {
                return instrumentsRepo.getByType(args.type)
            },

            // Performers
            performers: () => performersRepo.getAll(),
            performerById: (args: any) => performersRepo.getById(args.id),

            // Songs
            songs: () => songsRepo.getAll(),
            songById: (args: any) => songsRepo.getById(args.id),
        
        },

        graphiql: true, // Enable GraphiQL for testing
    }),
);

export { graphqlRouter };
