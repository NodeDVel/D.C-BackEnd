import { body, ValidationChain } from 'express-validator';

import { Field } from '@Lib/types';

import { password, phone } from '@Lib/regex.json';

const field: Field[] = [
  'Hacking',
  'Web FrontEnd Development',
  'Web BackEnd Develpment',
  'Android Development',
  'Desingner',
];

const patchApplyValidation: ValidationChain[] = [
  body('pk').isInt(),
  body('name').isString(),
  body('language').isString(),
  body('phoneNumber').isString().matches(phone),
  body('password').isString().matches(password),
  body('classNum').isInt({ min: 1, max: 4 }),
  body('studentNum').isInt({ min: 1, max: 30 }),
  body('content').isString().isLength({ min: 1, max: 400 }),
  body('reason').isString().isLength({ min: 1, max: 30 }),
  body('field').isString().custom((val) => field.includes(val)),
  body('isSubmit').isBoolean(),
]

export default patchApplyValidation;