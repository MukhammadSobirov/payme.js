export interface IReceiptsGetAllPayload {
    requestId: number;
    params: {
        count: number;
        from: number; // timestamp. E.g.: 1636398000000
        to: number; // timestamp. E.g.: 1636398000000
        offset: number;
    }
}