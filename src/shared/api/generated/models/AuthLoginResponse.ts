/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AuthLoginResponse = {
    token: string;
    staff: {
        staffId: number;
        fullName: string;
        login: string;
        role: AuthLoginResponse.role;
    };
};
export namespace AuthLoginResponse {
    export enum role {
        ADMIN = 'admin',
        MANAGER = 'manager',
        COURIER = 'courier',
    }
}

