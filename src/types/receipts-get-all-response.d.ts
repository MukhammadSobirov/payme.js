interface IReceiptsGetAllResponse {
    jsonrpc: string;
    id: number;
    result: IReceipt[];
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
    currency: number;
    commission: number;
    account: IAccount[];
    card: ICard | null;
    merchant: IMerchant;
    meta: IMeta | null;
    processing_id: number;
}

interface IAccount {
    name: string;
    title: ILanguageTitle;
    value: string | number;
    main: boolean;
}

interface ILanguageTitle {
    ru: string;
    uz: string;
    en?: string;
}

interface ICard {
    number: string;
    expire: string;
}

interface IMerchant {
    _id: string;
    name: string;
    organization: string;
    address: string;
    business_id: string;
    epos: IEpos;
    date: number;
    logo: string | null;
    type: ILanguageTitle;
    terms: string | null;
}

interface IEpos {
    merchantId: string;
    terminalId: string;
}

interface IMeta {
    source: string;
    owner: string;
}
