export interface IReceiptsPayPayload {
    requestId: number;
    params: IReceiptsPayParams;
}

interface IReceiptsPayParams {
    id: string;
    token: string;
    payer?: IReceiptsPayPayer;
}

interface IReceiptsPayPayer {
    id: string;
    phone: string;
    email: string;
    name: string;
    ip: string;
}