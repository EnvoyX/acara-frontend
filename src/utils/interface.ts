import { Session } from "next-auth";

export interface CustomSession extends Session {
    accessToken?: string;
}

export interface PropTypes {
    title?: string;
}
