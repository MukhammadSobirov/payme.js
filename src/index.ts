import { MerchantCreator } from "./classes/creators/merchant-creator"
import { SubscribeCreator } from "./classes/creators/subscribe-creator"
import { TApiMethodOption } from "./types/api-method-option"


export class PaymeClient {
   static create(option: TApiMethodOption) {
        if(option === "merchant") {
            return new MerchantCreator().init()
        } else {
            return new SubscribeCreator().init()
        }
    }
}