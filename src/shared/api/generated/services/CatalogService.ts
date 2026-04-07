/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatalogItem } from '../models/CatalogItem';
import type { CreateCatalogItemRequest } from '../models/CreateCatalogItemRequest';
import type { UpdateCatalogItemRequest } from '../models/UpdateCatalogItemRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CatalogService {
    /**
     * List catalog items
     * @returns CatalogItem Catalog list
     * @throws ApiError
     */
    public static getApiCatalog(): CancelablePromise<Array<CatalogItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/catalog',
        });
    }
    /**
     * Create catalog item
     * @returns CatalogItem Created catalog item
     * @throws ApiError
     */
    public static postApiCatalog({
        requestBody,
    }: {
        requestBody: CreateCatalogItemRequest,
    }): CancelablePromise<CatalogItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/catalog',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update catalog item
     * @returns CatalogItem Updated catalog item
     * @throws ApiError
     */
    public static patchApiCatalog({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: UpdateCatalogItemRequest,
    }): CancelablePromise<CatalogItem> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/catalog/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deactivate catalog item
     * @returns void
     * @throws ApiError
     */
    public static deleteApiCatalog({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/catalog/{id}',
            path: {
                'id': id,
            },
        });
    }
}
