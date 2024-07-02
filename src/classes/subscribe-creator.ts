import { IPaymeMethod } from "../types/payme-method";
import { Payme } from "./payme";
import { SubscribeAPI } from "./subscribe-api";

export class SubscribeCreator extends Payme {
    public init(): IPaymeMethod {
        return new SubscribeAPI()
    }
}