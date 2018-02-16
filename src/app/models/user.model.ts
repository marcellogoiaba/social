export class User{

    _id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;

    constructor(){
        this.first_name = '';
        this.last_name = '';
        this.email = '';
        this.password = '';
        this.username = '';
    }
}