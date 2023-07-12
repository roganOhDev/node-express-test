var createError = require('http-errors');
var express = require('express');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(indexRouter);
app.use(usersRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
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

module.exports = app;

app.listen(3000)