import { TApiMethodOption } from "./api-method-option"
import { IReceiptsCreatePayload } from "./receipts-create-payload";

export interface ISubscribeApiProduct {
    methodName: TApiMethodOption;
    setSecretKey(secret: string): void;
    setPaymeId(id: string): void;
    setPaymeApiURL(value: "dev" | "production");
    paymeApiURL: string;

    // API methods
    receiptsCreate(payload: IReceiptsCreatePayload): Promise<IReceiptsCreateResponse>
    // receiptsPay
    // receiptsSend
    // receiptsCancel
    // receiptsCheck
    // receiptsGet
    // receiptsGetAll
}