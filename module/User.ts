export default class User {
    user_id: number;
    user_name: string;
    password: string;
    email: string;

    constructor(
        user_id: number,
        user_name: string,
        password: string,
        email: string,
    ) {
        this.user_id = user_id;
        this.user_name = user_name;
        this.password = password;
        this.email = email;
    }

}