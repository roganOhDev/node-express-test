import Router from "express";
import {createUser} from "./userService.js";
import {ApiError} from "../errors/apiError.js";

export const router = Router('/user');

router.post('', function (req, res, next) {
    createUser();
    res.send('ok');
})
router.get('/users', function (req, res, next) {
    // throw new ApiError(400, 'This is a bad request.');
    res.send('respond with a resource');
});
