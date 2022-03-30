import { IBase } from "./base";
import { ITheme } from "./theme";
import { Iuser } from "./user";

export interface IPost extends IBase {
    likes: string[];
    text: string;
    userId: Iuser;
    themeId: ITheme;
}