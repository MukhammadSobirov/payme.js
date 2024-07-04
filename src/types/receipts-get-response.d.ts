interface IReceiptsGetResponse {
    jsonrpc: string;
    id: number;
    result: {
        receipt: IReceipt;
    };
}

interface IReceipt {
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
    account: IAccount[];
    card: string | null;
    merchant: IMerchant;
    meta: string | null;
}

interface IAccount {
    name: string;
    title: string;
    value: string;
}

interface IMerchant {
    _id: string;
    name: string;
    organization: string;
    address: string;
    epos: IEpos;
    date: number;
    logo: string | null;
    type: string;
    terms: string | null;
    payer: IPayer;
}

interface IEpos {
    merchantId: string;
    terminalId: string;
}

interface IPayer {
    phone: string;
}
