import { Gender } from "./gender";

export interface UserDict {
    uid: string;
    name: string;
    gender: Gender,
    phone: string,
    email: string,
    profile_photo_link: string;
}