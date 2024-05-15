import { Router, Request, Response } from "express";

const playersRouter = Router();

playersRouter.get("/", (_: Request, res: Response) => {
    res.status(200).send({
        msg: "Players router working ok",
    });
});

export { playersRouter };
