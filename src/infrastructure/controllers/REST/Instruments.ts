import { Router, Request, Response } from "express";

const instrumentsRouter = Router();

instrumentsRouter.get("/", (_: Request, res: Response) => {
    res.status(200).send({
        msg: "Instruments router working ok",
    });
});

export { instrumentsRouter };
