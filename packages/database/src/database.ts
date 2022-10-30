export type User = {
    name: string;
    age: number;
};

class Database {
    private users: User[] = [];

    constructor() {
        this.users.push({ name: 'John', age: 20 });
        this.users.push({ name: 'Mark', age: 25 });
        this.users.push({ name: 'Jane', age: 30 });    
    }

    getUsers(): User[] {
        return this.users;
    }
}

export function connectDB(host: string): Database {
    console.log(`Connecting to database ${host}...`);
    return new Database();
}


