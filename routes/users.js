import Router from "express";
import {ApiError} from "../errors/apiError.js";

export const router = Router();

router.get('/users', function (req, res, next) {
    // throw new ApiError(400, 'This is a bad request.');
    res.send('respond with a resource');
});
