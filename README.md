# Hybrid API

GraphQL and REST API in a single project. Both coexisting within an ExpressJS app.

This project is a PoC that may be implemented in [Feat It Healthy](https://github.com/jigth/Feat-It-Healthy/), It is using a clean architecture similar to Hexagonal Architecture but without vertical slicing. The idea is to separate concerns into different layers for better mantainability but keeping it relatively simple.

## Project Considerations

* An object representing a simple InMemory database was used instead of a real database consumed through an ORM to simplify the project's scope.

* It is in already a significant effort IMO to keep the architecture clean and make an API that supports both REST and GraphQL endpoints with their logic so I didn't use a real database initially.

* GraphQL Express was used instead of ApolloGraphQL because setting up an Hybrid RESTful+GraphQL API is simpler and I don't use subscriptions for now (GraphQL's real time data).

## How to run

### Dependencies

* YARN or NPM
* Node

### Run it

From the project's root folder execute the following commands in a shell.

```
$ yarn install # Or npm install
$ yarn dev # Or npm run dev
```

## Architecture rules (projectg organization)

* A layered architecture will be used to separate concerns. Infrastructure layer will be a separate layer to avoid depending on specific implementation but on contracts (interfaces), easing the code testing strategy.

* Singular names will be prefered over plural names for simplicity in the project's language.

* "I" will usually be a prefix for interfaces (e.g: IRepository).

* If something belongs to a domain entity, it should be encapsulated in a folder with the entity's name (in singular)

* For now I am not using "Vertical Slicing" (having each layer within its business domain) to keep the folder structure simpler, as this project won't grow very big and won't ever be converted to microservices.

* **Infrastructure:** Everything that depends on a Package Manager dependency, such as Databases, Controllers, Repositories, Utils, etc. Any technical concept should be put in a folder.

* **Domain:** Core entities used through the application and business. Usually map to a Database but entities may be somewhat differen to database tables models.

* **Application:** Application Logic, such as formating data, calling repositories to make cohesive entities, etc.
