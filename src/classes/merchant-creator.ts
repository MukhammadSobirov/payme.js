import { IPaymeMethod } from "../types/payme-method";
import { MerchantAPI } from "./merchant-api";
import { Payme } from "./payme";

export class MerchantCreator extends Payme {
    public init(): IPaymeMethod {
        return new MerchantAPI()
    }
}