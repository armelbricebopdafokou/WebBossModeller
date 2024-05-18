// basics
import path from 'path';

// express
import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session'
import { createClient } from 'redis';

// authentication
import { configurePassport } from './conf/passport';
import { isAdmin, isAuthenticated } from './mw/auth';
import passport from 'passport';

// routes
import auth from './routes/auth';

// test-routes
import test from './routes/test';

// admin routes
import admin from './routes/admin';

// middleware
import { logRequest } from './mw/logger';
import { proProxy, appProxy, searchProxy, postProxy, chatProxy, pubProxy } from './mw/proxy'

// redis 
import MongoStore from 'connect-mongo';

// express
const app = express();
const port = 3600;

app.use(session({
    //store: redisStore,
    secret: 'umpalumpa',
    resave: false,
    saveUninitialized: false
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

// authentication
configurePassport();

// views - ejs
app.set('view engine', 'ejs');
app.set('views', path.join("./", 'views'));

// prod-routes
app.use('/auth', auth);

// proxies
app.use('/pub', logRequest, pubProxy);
app.use('/pro', logRequest, proProxy);
app.use('/app', logRequest, appProxy);
app.use('/search', logRequest, searchProxy);
app.use('/post', logRequest, postProxy);
app.use('/chat', logRequest, chatProxy);

// admin-routes
app.use('/adm', logRequest, isAuthenticated, isAdmin, admin);

// test-routes
app.use('/test', logRequest, isAuthenticated, test);

// testtest
app.get('/', (req: Request, res: Response) => {
    res.json({ message: "hello world" }); 
    //res.send("hello world!\n");
    //res.render('index', { message: 'Hello, World!' });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;