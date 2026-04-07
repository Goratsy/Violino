/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateStaffRequest } from '../models/CreateStaffRequest';
import type { Staff } from '../models/Staff';
import type { StaffListResponse } from '../models/StaffListResponse';
import type { UpdateStaffRequest } from '../models/UpdateStaffRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StaffsService {
    /**
     * List staff members
     * @returns StaffListResponse Staff list
     * @throws ApiError
     */
    public static getApiStaffs(): CancelablePromise<StaffListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/staffs',
        });
    }
    /**
     * Create staff member
     * @returns Staff Created staff member
     * @throws ApiError
     */
    public static postApiStaffs({
        requestBody,
    }: {
        requestBody: CreateStaffRequest,
    }): CancelablePromise<Staff> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/staffs',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update staff member
     * @returns Staff Updated staff member
     * @throws ApiError
     */
    public static patchApiStaffs({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: UpdateStaffRequest,
    }): CancelablePromise<Staff> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/staffs/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deactivate staff member
     * @returns void
     * @throws ApiError
     */
    public static deleteApiStaffs({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/staffs/{id}',
            path: {
                'id': id,
            },
        });
    }
}
