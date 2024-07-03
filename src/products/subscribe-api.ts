import { TApiMethodOption } from "../types/api-method-option";
import { ISubscribeApiProduct } from "../types/subscribe-api-product";

export class SubscribeAPI implements ISubscribeApiProduct {
    private _secret = ""
    private _id = ""

    private readonly _test_api =  "https://checkout.test.paycom.uz/api"
    private readonly _production_api = "https://checkout.paycom.uz/api"

  
    private _payme_api_url = process.env.NODE_ENV === "production" ? this._production_api : this._test_api;

    public methodName: TApiMethodOption = "subscribe"


    public setSecretKey(secret: string): void {
        this._secret = secret;
    }

    public setPaymeId(id: string): void {
        this._id = id
    }

    /**
     * setPaymeApiURL
     */
    public setPaymeApiURL(value: "dev" | "production") {
        this._payme_api_url = value === "production" ? this._production_api : this._test_api;
    }


      /**
     * paymeApiURL
     * @description Depending on the NODE_ENV it might be set to **test** (https://checkout.test.paycom.uz/api), or to **production** (https://checkout.paycom.uz/api)
     * To manually controll the value @see setPaymeApiURL
     */
    get paymeApiURL() {
        return this._payme_api_url
    }
    
}