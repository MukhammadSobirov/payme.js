interface IReceiptsPayAccount {
  name: string;
  title: string;
  value: string;
}

interface IReceiptsPayCard {
  number: string;
  expire: string;
}

interface IReceiptsPayEpos {
  merchantId: string;
  terminalId: string;
}

interface IReceiptsPayPayer {
  phone: string;
}

interface IReceiptsPayMerchant {
  _id: string;
  name: string;
  organization: string;
  address: string;
  epos: IReceiptsPayEpos;
  date: number;
  logo: string | null;
  type: string;
  terms: string | null;
  payer: IReceiptsPayPayer;
}

interface IReceiptsPayReceipt {
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
  account: IReceiptsPayAccount[];
  card: IReceiptsPayCard;
  merchant: IReceiptsPayMerchant;
  payer : IPayerphone;
  
  meta: string | null;
}

interface IPayerphone {
  phone: string;
}

interface IReceiptsPayResult {
  receipt: IReceiptsPayReceipt;
}

export interface IReceiptsPayResponse {
  jsonrpc: string;
  id: number | null;
  result: IReceiptsPayResult;
}
