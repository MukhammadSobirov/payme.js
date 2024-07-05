import { TApiMethodOption } from "./api-method-option"

export interface IMerchantApiProduct {
    methodName: TApiMethodOption
    setSecretKey(secret: string): void
    setPaymeId(id: string): void
}