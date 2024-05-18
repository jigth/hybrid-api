import { Router } from "express";
import { instrumentRepository } from "../../repositories/instrument/instrument";
import { performerRepository } from "../../repositories/performer/performer";
import { songRepository } from "../../repositories/song/song";
import { IInstrumentRepository } from "../../repositories/instrument/interfaces";
import { RepoTypes } from "../../../domain/models/shared/repository/repository";
import { ISongRepository } from "../../repositories/song/interfaces";
import { IPerformerRepository } from "../../repositories/performer/interfaces";

import { createSchema, createYoga } from 'graphql-yoga';
import { Performer } from "../../../domain/models/performer/performer";
import { Song } from "../../../domain/models/song/song";
import { Instrument } from "../../../domain/models/instrument/instrument";

// Here I make the controller code dependent on interfaces. The initialization part may change as needed.
// The fact that this controller is dependent on interfaces instead of implementations helps keeping code more decoupled.
const instrumentsRepo: IInstrumentRepository<RepoTypes> = instrumentRepository
const performersRepo: IPerformerRepository<RepoTypes> = performerRepository
const songsRepo: ISongRepository<RepoTypes> = songRepository

const graphqlRouter: Router = Router();

const schema = createSchema({
    typeDefs: `#graphql
        type Instrument {
            id: String!
            name: String!
            type: String!
            performers: [Performer!]
        }

        type Performer {
            id: String!
            name: String!
            genre: String!
            age: Int!
            instruments: [Instrument!]
        }

        type Song {
            id: String!
            name: String!
            genre: String!
            performer: Performer!
        }

        type Query {
            instruments: [Instrument!]!,
            instrumentById(id: String!): Instrument!
            instrumentsByName(name: String!): [Instrument!]!
            instrumentsByType(type: String!): [Instrument!]!

            performers: [Performer!]!
            performer: Performer!

            songs: [Song!]!
            songById: [Song!]!
        },
    `,
    resolvers: {
        Query: {
            // Instruments
            instruments: () => instrumentsRepo.getAll(),
            instrumentById: (_: any, args: any) => {
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
            performer: (args: any) => performersRepo.getById(args.id),

            // Songs
            songs: () => songsRepo.getAll(),
            songById: (args: any) => songsRepo.getById(args.id),
        },

        Performer: {
            instruments(parent: any) {
                return instrumentsRepo.getAll().filter((instrument: Instrument) => 
                    parent.instruments_ids.includes(instrument.id)
                );
            }
        },

        Instrument: {
            performers(parent: any) {
                return performersRepo.getAll().filter((performer: Performer) =>
                    performer.instruments_ids.includes(parent.id)
                );
            }
        },

        Song: {
            performer(parent: any) {
                return performersRepo.getAll().find((performer: Song) =>
                    performer.id === parent.performer_id
                , null);
            }
        }

    }
});

const yogaHandler = createYoga({schema})

// For now I am not using classes in this router to keep the code simpler because it is short enough
graphqlRouter.use(
    "/",
    yogaHandler
);

export { graphqlRouter };
