import { Request, Response, NextFunction } from 'express';
import { User } from '../model/user'

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    //console.log(`checking for auth: ${req.user}`);
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/auth/login');
}

export async function isAdmin(req: Request, res: Response, next: NextFunction) {
    //console.log("just checking for admin.");
    let usr = await req.user;
    if (usr != null) {
        let jusr = JSON.parse(usr.toString());
        if (jusr.roles != null) {
            let suc = false;
            await jusr.roles.forEach((elem: string) => {
                if (elem === "admin") {
                    //console.log("beepbeep admin detected.");
                    suc = true;
                    return next();
                }
            });
            if(!suc){
                res.send("not admin >:/");
            }
        }
    }
}

export default { isAuthenticated, isAdmin };