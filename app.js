import createError from 'http-errors';
import express from 'express';
import indexRouter from './routes/index.js';
import {connect} from './config/connection.js';
import {renderFile} from "ejs";

var app = express();

app.engine('html', renderFile);
app.set('view engine', 'html');

app.use(indexRouter);
// app.use(usersRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    connect();
    next(createError(404));
});

app.get('/error', function (req, res, next) {
    console.log("thr error");
    new Error('error');
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


app.listen(3000)

export default app;
