/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePublicOrderRequest } from '../models/CreatePublicOrderRequest';
import type { GroupedCatalog } from '../models/GroupedCatalog';
import type { OrderDetail } from '../models/OrderDetail';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PublicService {
    /**
     * Get active public catalog
     * @returns GroupedCatalog Grouped catalog for landing page form
     * @throws ApiError
     */
    public static getApiPublicCatalog(): CancelablePromise<GroupedCatalog> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/catalog',
        });
    }
    /**
     * Create public order
     * @returns OrderDetail Created order
     * @throws ApiError
     */
    public static postApiPublicOrders({
        requestBody,
    }: {
        requestBody: CreatePublicOrderRequest,
    }): CancelablePromise<OrderDetail> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/public/orders',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation or catalog error`,
            },
        });
    }
}
