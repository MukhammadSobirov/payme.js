import { TApiMethodOption } from "./api-method-option"

export interface ISubscribeApiProduct {
    methodName: TApiMethodOption
    setSecretKey(secret: string): void
    setPaymeId(id: string): void
    paymeApiURL: string
}