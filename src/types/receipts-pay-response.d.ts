interface IAccount {
    name: string;
    title: string;
    value: string;
  }
  
  interface ICard {
    number: string;
    expire: string;
  }
  
  interface IEpos {
    merchantId: string;
    terminalId: string;
  }
  
  interface IPayer {
    phone: string;
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
    card: ICard;
    merchant: IMerchant;
    meta: string | null;
  }
  
  interface IResult {
    receipt: IReceipt;
  }
  
export interface IReceiptsPayResponse {
    jsonrpc: string;
    id: number | null;
    result: IResult;
}
  