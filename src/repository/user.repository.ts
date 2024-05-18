import { User } from "../model/user";
import { getFromDB, getFirstFromDB, getID, writeToDB } from "../util/db";
import bcrypt from 'bcrypt';

export async function findById(id: number): Promise<User> {
    const user: User = await getFromDB("user", id);
    return user;
};

export async function findOne(uname: string): Promise<User> {
    const user: User = await getFirstFromDB("user", "uname", uname);
    return user;
}

export async function createUser(uname:string, password :string, email :string, roles :string[]): Promise<User> {
    const id :number= await getID("user");
    const user :User= {
        "id": id, "uname": uname, "email": email, "pwhash": await bcrypt.hashSync(password, 10), "roles": roles,
        org: "",
        created: undefined,
        lastAccess: undefined
    };
    writeToDB("user", id, user);
    return user;
}

