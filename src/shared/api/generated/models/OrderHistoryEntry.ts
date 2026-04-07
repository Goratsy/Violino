/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderStatus } from './OrderStatus';
export type OrderHistoryEntry = {
    orderStatusHistoryId: number;
    status: OrderStatus;
    location: string | null;
    note: string | null;
    changedAt: string;
    changedBy: {
        staffId: number;
        fullName: string;
        role: OrderHistoryEntry.role;
    } | null;
};
export namespace OrderHistoryEntry {
    export enum role {
        ADMIN = 'admin',
        MANAGER = 'manager',
        COURIER = 'courier',
    }
}

