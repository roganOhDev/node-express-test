import {User} from "./user.js";
import {sequelize} from "../config/connection.js";

export function createUser() {
    let user;
    sequelize.sync().then(() => {
        User.create({
            firstName: "asdf",
            age: 12
        }).then(res => {
            user = res;
            console.log("user created");
        }).catch((err) => {
            console.log(err);
        })
    });
    console.log("createUser");
    console.log(user.firstName)
}

