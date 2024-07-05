export interface IReceiptsGetAllResponse {
    jsonrpc: string;
    id: number;
    result: IReceiptsGetAllResponseReceipt[];
}

interface IReceiptsGetAllResponseReceipt {
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
    currency: number;
    commission: number;
    account: IReceiptsGetAllResponseAccount[];
    card: IReceiptsGetAllResponseCard | null;
    merchant: IReceiptsGetAllResponseMerchant;
    meta: IReceiptsGetAllResponseMeta | null;
    processing_id: number;
}

interface IReceiptsGetAllResponseAccount {
    name: string;
    title: IReceiptsGetAllResponseLanguageTitle;
    value: string | number;
    main: boolean;
}

interface IReceiptsGetAllResponseLanguageTitle {
    ru: string;
    uz: string;
    en?: string;
}

interface IReceiptsGetAllResponseCard {
    number: string;
    expire: string;
}

export interface IReceiptsGetAllResponseMerchant {
    _id: string;
    name: string;
    organization: string;
    address: string;
    business_id: string;
    epos: IReceiptsGetAllResponseEpos;
    date: number;
    logo: string | null;
    type: IReceiptsGetAllResponseLanguageTitle;
    terms: string | null;
}

export interface IReceiptsGetAllResponseEpos {
    merchantId: string;
    terminalId: string;
}

export interface IReceiptsGetAllResponseMeta {
    source: string;
    owner: string;
}
