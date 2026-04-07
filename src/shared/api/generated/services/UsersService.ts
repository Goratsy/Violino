/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { UsersListResponse } from '../models/UsersListResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * List users
     * @returns UsersListResponse Users list
     * @throws ApiError
     */
    public static getApiUsers({
        search,
        limit = 50,
        offset,
    }: {
        search?: string,
        limit?: number,
        offset?: number | null,
    }): CancelablePromise<UsersListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users',
            query: {
                'search': search,
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * Get user by id
     * @returns User User details
     * @throws ApiError
     */
    public static getApiUsers1({
        id,
    }: {
        id: number,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get user by phone
     * @returns User User details
     * @throws ApiError
     */
    public static getApiUsersByPhone({
        phone,
    }: {
        phone: string,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/by-phone/{phone}',
            path: {
                'phone': phone,
            },
        });
    }
}
