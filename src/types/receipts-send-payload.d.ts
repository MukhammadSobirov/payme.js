export interface IReceiptsSendPayload {
    requestId: number;
    params: {
        id: string;
        phone: string;
    };
}