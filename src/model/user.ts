

export interface User {
    id: number;
    uname: string;
    email: string;
    pwhash: string;
    org: string;
    created: Date;
    lastAccess: Date;
    roles: string[];
}

