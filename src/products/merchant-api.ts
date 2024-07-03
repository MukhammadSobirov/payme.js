import { TApiMethodOption } from "../types/api-method-option";
import { IMerchantApiProduct } from "../types/merchant-api-product";

export class MerchantAPI implements IMerchantApiProduct {
    private _secret = "";
    private _id = "";
    public methodName: TApiMethodOption = "merchant"




    setSecretKey(secret: string): void {
        this._secret = secret;
    }

    setPaymeId(id: string): void {
        this._id = id
    }

}