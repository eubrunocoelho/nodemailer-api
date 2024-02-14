import { body, ValidationChain } from 'express-validator';

const validationMiddleware: ValidationChain[] = [
    body('name').notEmpty().isLength({ min: 3, max: 128 }),
    body('phone').notEmpty().matches(/^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/),
    body('email').notEmpty().isLength({ max: 128 }).isEmail(),
    body('subject').notEmpty().isLength({ min: 6, max: 128 }),
    body('message').notEmpty().isLength({ min: 20, max: 1200 })
];

export default validationMiddleware;