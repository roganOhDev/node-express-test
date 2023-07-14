import createError from 'http-errors';
import express from 'express';
import {router as userRouter} from './domain/userController.js';
import {router as indexRouter} from './routes/index.js';
import {connect} from './config/connection.js';
import {renderFile} from "ejs";

const app = express();

app.engine('html', renderFile);
app.set('view engine', 'html');

app.use(indexRouter);
app.use(userRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.get('/error', function (req, res, next) {
    console.log("thr error");
    new Error('error');
});

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.message = err.message;
    res.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


app.listen(3000,() => {
    connect();
})

export default app;
