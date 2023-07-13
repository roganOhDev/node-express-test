import {Router} from "express";

const indexRouter = Router();

indexRouter.get('/index', function(req, res, next) {
  res.render('index', { title: 'My Index Page' });
});

export default indexRouter;
