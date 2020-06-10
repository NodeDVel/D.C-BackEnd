import { NextFunction, Request, Response } from 'express';

import { isFinish } from '@Lib/status.json';
import CustomError from '../error/customError';

const checkStatus = (req: Request, res: Response, next: NextFunction) => {
  if (isFinish) {
    next(new CustomError({ name: 'Forbidden', message: '지원이 마감되었습니다.' }));
  }

  next();
};

export default checkStatus;