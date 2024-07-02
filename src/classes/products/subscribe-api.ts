import { TApiMethodOption } from "../../types/api-method-option";
import { IPaymeMethod } from "../../types/payme-method";

export class SubscribeAPI implements IPaymeMethod {
    private _secret = ""
    private _id = ""
    public methodName: TApiMethodOption = "subscribe"


    setSecretKey(secret: string): void {
        this._secret = secret;
    }
    setPaymeId(id: string): void {
        this._id = id
    }
    
}