import { TApiMethodOption } from "./api-method-option"

export interface IPaymeMethod {
    methodName: TApiMethodOption
    setSecretKey(secret: string): void
    setPaymeId(id: string): void
}