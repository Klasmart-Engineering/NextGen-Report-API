import { UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export function checkAuthentication(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(req.path);
  if (req.path.startsWith('/app/test') || req.path.startsWith('/api'))
    return next();
  if (res.locals.authenticated && res.locals.token) {
    return next();
  }

  return next(new UnauthorizedException());
}
