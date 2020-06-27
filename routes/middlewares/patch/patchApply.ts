import { NextFunction, Request, Response } from 'express';

import Apply from '@Model/apply.school_club.model';
import CustomError from '../error/customError';

const patchApply = async (req: Request, res: Response, next: NextFunction) => {
  const pk: Apply['pk'] = req.body.pk;
  const name: Apply['name'] = req.body.name;
  const phoneNumber: Apply['phoneNumber'] = req.body.phoneNumber;
  const classNum: Apply['classNum'] = req.body.classNum;
  const studentNum: Apply['studentNum'] = req.body.studentNum;
  const content: Apply['content'] = req.body.content;
  const reason: Apply['reason'] = req.body.reason;
  const language: Apply['language'] = req.body.language;
  const field: Apply['field'] = req.body.field;
  const isSubmit: Apply['isSubmit'] = req.body.isSubmit;

  const apply: Apply = await Apply.findOne({
    where: {
      pk,
    },
  });

  if(!apply) {
    next(new CustomError({ name: 'Wrong_Data' , message: '잘못된 데이터입니다.' }));
  }

  await apply.update({
    phoneNumber,
    name,
    classNum,
    studentNum,
    field,
    content,
    reason,
    language,
    isSubmit
  }).then((val: Apply) => {
    if(!val) {
      next(new CustomError({ name: 'Wrong_Data', message: '잘못된 데이터입니다.' }));
    }
  });

  res.json({
    success: true,
    data: {
      apply,
    },
  });
}

export default patchApply;