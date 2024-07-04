interface IReceiptsCreateResponseDiscount {
    title: string;
    price: number;
}

interface IReceiptsCreateResponseShipping {
    title: string;
    price: number;
}

interface IReceiptsCreateResponseItem {
    title: string;
    price: number;
    count: number;
    code: string;
    units: number;
    vat_percent: number;
    package_code: string;
}

interface IReceiptsCreateResponseDetail {
    discount: IReceiptsCreateResponseDiscount;
    shipping: IReceiptsCreateResponseShipping;
    items: IReceiptsCreateResponseItem[];
}

interface IReceiptsCreateResponseEpos {
    merchantId: string;
    terminalId: string;
}

interface IReceiptsCreateResponseMerchant {
    _id: string;
    name: string;
    organization: string;
    address: string;
    business_id: string;
    epos: IReceiptsCreateResponseEpos;
    date: number;
    logo: any; // If logo can be of different types, adjust this type accordingly
    type: string;
    terms: any; // If terms can be of different types, adjust this type accordingly
}

interface IReceiptsCreateResponseMeta {
    source: string;
    owner: string;
}

interface IReceiptsCreateResponseReceipt {
    _id: string;
    create_time: number;
    pay_time: number;
    cancel_time: number;
    state: number;
    type: number;
    external: boolean;
    operation: number;
    category: any; // If category can be of different types, adjust this type accordingly
    error: any; // If error can be of different types, adjust this type accordingly
    description: string;
    detail: IReceiptsCreateResponseDetail;
    amount: number;
    currency: number;
    commission: number;
    account: any
    card: any; // If card can be of different types, adjust this type accordingly
    merchant: IReceiptsCreateResponseMerchant;
    meta: IReceiptsCreateResponseMeta;
    processing_id: any; // If processing_id can be of different types, adjust this type accordingly
}

interface IReceiptsCreateResponseResult {
    receipt: IReceiptsCreateResponseReceipt;
}

export interface IReceiptsCreateResponse {
    jsonrpc: string;
    id: number;
    result: IReceiptsCreateResponseResult;
}
