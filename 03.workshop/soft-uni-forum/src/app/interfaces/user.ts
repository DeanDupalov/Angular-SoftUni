import { IBase } from "./base";

export interface Iuser extends IBase {
    themes: string[];
    post: string[];
    tel: string;
    email: string;
    username: string;
    password: string;

}