import { IPaymeMethod } from "../types/payme-method";

export class SubscribeAPI implements IPaymeMethod {
    private _secret = ""
    private _id = ""


    setSecretKey(secret: string): void {
        this._secret = secret;
    }
    setPaymeId(id: string): void {
        this._id = id
    }
    
}