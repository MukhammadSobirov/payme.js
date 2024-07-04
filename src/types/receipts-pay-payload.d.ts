export interface IReceiptsPayPayload {
    requestId: number;
    params: IParams;
}

interface IParams {
    id: string;
    token: string;
    payer?: IPayer;
}

interface IPayer {
    id: string;
    phone: string;
    email: string;
    name: string;
    ip: string;
}