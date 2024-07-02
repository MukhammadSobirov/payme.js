import { MerchantCreator } from "./classes/merchant-creator"
import { SubscribeCreator } from "./classes/subscribe-creator"
import { TApiMethodOption } from "./types/api-method-option"


export class PaymeClient {
    constructor(option: TApiMethodOption) {
        if(option === "merchant") {
            return new SubscribeCreator()
        } else {
            return new MerchantCreator()
        }
    }
}