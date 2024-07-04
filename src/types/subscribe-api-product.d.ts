import { TApiMethodOption } from "./api-method-option"
import { IReceiptsCancelPayload } from "./receipts-cancel-payload";
import { IReceiptsCancelResponse } from "./receipts-cancel-response";
import { IReceiptsCreatePayload } from "./receipts-create-payload";
import { IReceiptsPayPayload } from "./receipts-pay-payload";
import { IReceiptsPayResponse } from "./receipts-pay-response";
import { IReceiptsSendPayload } from "./receipts-send-payload";
import { IReceiptsSendResponse } from "./receipts-send-response";

export interface ISubscribeApiProduct {
    methodName: TApiMethodOption;
    setSecretKey(secret: string): void;
    setPaymeId(id: string): void;
    setPaymeApiURL(value: "dev" | "production");
    paymeApiURL: string;

    // API methods
    receiptsCreate(payload: IReceiptsCreatePayload): Promise<IReceiptsCreateResponse>
    receiptsPay(payload: IReceiptsPayPayload): Promise<IReceiptsPayResponse>
    receiptsSend(payload: IReceiptsSendPayload): Promise<IReceiptsSendResponse>
    receiptsCancel(payload: IReceiptsCancelPayload): Promise<IReceiptsCancelResponse>
    // receiptsCheck
    // receiptsGet
    // receiptsGetAll
}