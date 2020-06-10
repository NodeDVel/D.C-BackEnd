import { NextFunction, Request, Response } from 'express';

import Apply from '@Model/apply.school_club.model';
import CustomError from '../error/customError';

const applyExistCheck = async (req: Request, res: Response, next: NextFunction) => {
  const phoneNumber: Apply['phoneNumber'] = req.body.phoneNumber;

  const apply: Apply = await Apply.findOne({
    where: {
      phoneNumber,
    },
  }).catch(next(new CustomError({ name: 'Database_Error'})));

  // tslint:disable-next-line: triple-equals
  if (req.url == '/apply' && req.method == 'POST') {
    if (apply) {
      next(new CustomError({ name: 'Exist_Data', message: '중복된 신청서입니다.' }));
    }
    next();
  }

  // tslint:disable-next-line: triple-equals
  if (req.url == '/apply' && req.method == 'PATCH') {
    if (!apply) {
      next(new CustomError({ name: 'Not_Found', message: '존재하지 않는 신청서입니다.' }));
    }
    res.locals.apply = apply;
    next();
  }

  // tslint:disable-next-line: triple-equals
  if (req.url == '/appliy/load') {
    if (!apply) {
      next(new CustomError({ name: 'Not_Found', message: '존재하지 않는 신청서입니다.' }));
    }
    res.locals.applyExistCheck = apply;
    next();
  }

}


export default applyExistCheck;