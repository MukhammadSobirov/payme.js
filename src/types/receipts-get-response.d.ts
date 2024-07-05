export interface IReceiptsGetResponse {
    jsonrpc: string;
    id: number;
    result: {
        receipt: IReceiptsGetResponseReceipt;
    };
}

interface IReceiptsGetResponseReceipt {
    _id: string;
    create_time: number;
    pay_time: number;
    cancel_time: number;
    state: number;
    type: number;
    external: boolean;
    operation: number;
    category: string | null;
    error: string | null;
    description: string;
    detail: string | null;
    amount: number;
    commission: number;
    account: IReceiptsGetResponseAccount[];
    card: string | null;
    merchant: IReceiptsGetResponseMerchant;
    meta: string | null;
}

interface IReceiptsGetResponseAccount {
    name: string;
    title: string;
    value: string;
}

interface IReceiptsGetResponseMerchant {
    _id: string;
    name: string;
    organization: string;
    address: string;
    epos: IReceiptsGetResponseEpos;
    date: number;
    logo: string | null;
    type: string;
    terms: string | null;
    payer: IReceiptsGetResponsePayer;
}

interface IReceiptsGetResponseEpos {
    merchantId: string;
    terminalId: string;
}

interface IReceiptsGetResponsePayer {
    phone: string;
}
