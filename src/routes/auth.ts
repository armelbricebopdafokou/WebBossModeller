import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import {
  // Use this as a replacement for express.Request
  ValidatedRequest,

  // Creates a validator that generates middlewares
  createValidator
} from 'express-joi-validation'
import { loginRequestSchema, loginSchema } from '../mw/validation/login.validation';


const router = express.Router();

//creation of validation object
const validator = createValidator()

router.get('/login', (req, res) => {
  res.send("not logged in.");
});

router.post('/login', [ validator.body(loginSchema) ,passport.authenticate('local')], (req:ValidatedRequest<loginRequestSchema>, res) => {
  console.log("some user logged in");
  res.send('Login successful');
});

router.get('/logout', (req, res, next) => {
  req.logout(null, (err :any)=> {
    if(err){
        console.log("there was an error logging out:", err);
    }
  });
  res.send('Logout successful');
});

export default router;
