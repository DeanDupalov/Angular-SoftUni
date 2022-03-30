import { IBase } from "./base";
import { Iuser } from "./user";

export interface ITheme extends IBase {
    subscribers: string[];
    posts: string[];
    themeName: string;
    userId: Iuser;
}