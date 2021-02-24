import { Gender } from "./gender";
import { UserDict } from "./user-dict";

export class User implements UserDict {
    constructor (
        public uid: string,
        public name: string,
        public gender: Gender,
        public phone: string,
        public email: string,
        public profile_photo_link: string,
    ) { }
    
}