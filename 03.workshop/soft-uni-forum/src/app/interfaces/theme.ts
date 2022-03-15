import { Iuser } from "./user";

export interface ITheme {
    subscribers: string[];
    posts: string[];
    _id: string;
    themeName: string;
    userId: Iuser;
    created_at: string;
    updatedAt: string;
    __v: number;
}