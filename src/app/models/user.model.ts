export class User {
    _id: string;
    name: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    avatar: string;

    constructor(name, lastName, email, phoneNumber, avatar) {
         this.name = name;
         this.lastName = lastName;
         this.email = email;
         this.phoneNumber = phoneNumber;
         this.avatar = avatar;
    }

}