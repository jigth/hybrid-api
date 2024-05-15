import "dotenv/config";
import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { instrumentsRouter } from "./infrastructure/controllers/REST/Instruments";
import { playersRouter } from "./infrastructure/controllers/REST/players";
import { graphqlRouter } from "./infrastructure/controllers/GraphQL";

export const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.get("/", (_: Request, res: Response) => {
    res.status(200).json({
        msg: "Health check ok!",
    });
});

//// GraphQL API
app.use("/graphql", graphqlRouter);

//// Rest API
app.use("/instruments", instrumentsRouter);
app.use("/players", playersRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
