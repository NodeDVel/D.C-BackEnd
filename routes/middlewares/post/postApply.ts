import { NextFunction, Request, Response } from 'express';

import Apply from '@Model/apply.school_club.model';
import CustomError from '../error/customError';

const postApply = async (req: Request, res: Response, next: NextFunction) => {
  const name: Apply['name'] = req.body.name; 
  const classNum: Apply['classNum'] = req.body.classNum;
  const studentNum: Apply['studentNum'] = req.body.studentNum;
  const password: Apply['password'] = req.body.password;
  const passwordKey: Apply['passwordKey'] = req.body.passwordKey;
  const phoneNumber: Apply['phoneNumber'] = req.body.phoneNumber;
  const field: Apply['field'] = req.body.field;
  const content: Apply['content'] = req.body.content;
  const reason: Apply['reason'] = req.body.reason;
  const language: Apply['language'] = req.body.language;
  const isSubmit: Apply['isSubmit'] = req.body.isSubmit;

  const apply: Apply = await Apply.create({
    name,
    classNum,
    studentNum,
    password,
    passwordKey,
    phoneNumber,
    field,
    content,
    reason,
    language,
    isSubmit,
  });

  if(!apply) {
    next(new CustomError({ name: 'Database_Error' }));
  } 
  if(!name || !password || !content || !reason === undefined) {
    next(new CustomError({ name: 'Wrong_Data', message: '공백을 채워주십시오' }));
  }
  

  res.json({
    success: true,
    data: {
      apply: {
        name: apply.name,
        classNum: apply.classNum,
        studentNum: apply.studentNum,
        password: apply.password,
        passwordKey: apply.passwordKey,
        phoneNumber: apply.phoneNumber,
        field: apply.phoneNumber,
        reason: apply.reason,
        language: apply.language,
        isSubmit: apply.isSubmit,
      },
    },
  });

}

export default postApply;