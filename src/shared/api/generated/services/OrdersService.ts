/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderDetail } from '../models/OrderDetail';
import type { OrderHistoryEntry } from '../models/OrderHistoryEntry';
import type { OrderStatus } from '../models/OrderStatus';
import type { OrderSummary } from '../models/OrderSummary';
import type { UpdateOrderRequest } from '../models/UpdateOrderRequest';
import type { UpdateOrderStatusRequest } from '../models/UpdateOrderStatusRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrdersService {
    /**
     * List orders
     * @returns OrderSummary Order list
     * @throws ApiError
     */
    public static getApiOrders({
        status,
        userId,
        staffId,
        phone,
        limit = 50,
        offset,
    }: {
        status?: OrderStatus,
        userId?: number,
        staffId?: number,
        phone?: string,
        limit?: number,
        offset?: number | null,
    }): CancelablePromise<Array<OrderSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders',
            query: {
                'status': status,
                'userId': userId,
                'staffId': staffId,
                'phone': phone,
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * Get order details
     * @returns OrderDetail Order details
     * @throws ApiError
     */
    public static getApiOrders1({
        id,
    }: {
        id: number,
    }): CancelablePromise<OrderDetail> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update order
     * @returns OrderDetail Updated order
     * @throws ApiError
     */
    public static patchApiOrders({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: UpdateOrderRequest,
    }): CancelablePromise<OrderDetail> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/orders/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update order status
     * @returns OrderHistoryEntry Updated order history
     * @throws ApiError
     */
    public static postApiOrdersStatus({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: UpdateOrderStatusRequest,
    }): CancelablePromise<Array<OrderHistoryEntry>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/orders/{id}/status',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get order status history
     * @returns OrderHistoryEntry Order history
     * @throws ApiError
     */
    public static getApiOrdersHistory({
        id,
    }: {
        id: number,
    }): CancelablePromise<Array<OrderHistoryEntry>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/{id}/history',
            path: {
                'id': id,
            },
        });
    }
}
