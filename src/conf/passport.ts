import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import {findById, findOne, createUser} from '../repository/user.repository';

export function configurePassport(): void {
    /*
    await User.createUser("admin", "umpa", "daoisjdoi", ["admin"]);
    await User.createUser("user", "cupa", "wdasd", []);
    */
    passport.use(new LocalStrategy(async (username, password, done) => {
        const user = await findOne(username); 
        console.log("userlogin",user);
        if (!user) {
            console.log("USERNAME WRONG");
            return done(null, false, { message: 'Incorrect username.' });
        }
        try {
            if (await bcrypt.compare(password, user.pwhash)) { 
                console.log("ALL GOOD");
                return done(null, user);
            } else {
                console.log("PASSWORD WRONG");
                return done(null, false, { message: 'Incorrect password.' });
            }
        } catch (error) {
            return done(error);
        }
    }));

    passport.serializeUser((user: any, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id: number, done) => {
        const usr = findById(id);
        done(null, usr);
    });
}
