/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatalogItemType } from './CatalogItemType';
export type CreateCatalogItemRequest = {
    type: CatalogItemType;
    name: string;
    description?: string | null;
    price: number;
    imageUrl?: string | null;
    isActive?: boolean;
};

