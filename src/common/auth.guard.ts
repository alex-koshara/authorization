import { IMiddleWare } from './middleware.interface';
import { NextFunction, Request, Response } from 'express';

export class AuthGuard implements IMiddleWare {
	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.user) {
			return next();
		}
		res.status(401).send({ error: 'You are not autorizated' });
	}
}
