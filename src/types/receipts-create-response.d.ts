interface IDiscount {
    title: string;
    price: number;
}

interface IShipping {
    title: string;
    price: number;
}

interface IItem {
    title: string;
    price: number;
    count: number;
    code: string;
    units: number;
    vat_percent: number;
    package_code: string;
}

interface IDetail {
    discount: IDiscount;
    shipping: IShipping;
    items: IItem[];
}

interface IEpos {
    merchantId: string;
    terminalId: string;
}

interface IMerchant {
    _id: string;
    name: string;
    organization: string;
    address: string;
    business_id: string;
    epos: IEpos;
    date: number;
    logo: any; // If logo can be of different types, adjust this type accordingly
    type: string;
    terms: any; // If terms can be of different types, adjust this type accordingly
}

interface IMeta {
    source: string;
    owner: string;
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
    category: any; // If category can be of different types, adjust this type accordingly
    error: any; // If error can be of different types, adjust this type accordingly
    description: string;
    detail: IDetail;
    amount: number;
    currency: number;
    commission: number;
    account: any
    card: any; // If card can be of different types, adjust this type accordingly
    merchant: IMerchant;
    meta: IMeta;
    processing_id: any; // If processing_id can be of different types, adjust this type accordingly
}

interface IResult {
    receipt: IReceipt;
}

interface IReceiptsCreateResponse {
    jsonrpc: string;
    id: number;
    result: IResult;
}
