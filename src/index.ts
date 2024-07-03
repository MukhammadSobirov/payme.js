import { MerchantAPI } from "./products/merchant-api"
import { SubscribeAPI } from "./products/subscribe-api"
import { TApiMethodOption } from "./types/api-method-option"

export class PaymeClient  {
   static create<T extends TApiMethodOption>(type: T): T extends 'merchant' ? MerchantAPI : SubscribeAPI {
        if (type === 'merchant') {
            return new MerchantAPI() as T extends 'merchant' ? MerchantAPI : SubscribeAPI;
        } else if (type === 'subscribe') {
            return new SubscribeAPI() as T extends 'merchant' ? MerchantAPI : SubscribeAPI;
        } else {
            throw new Error('Invalid API type');
        }
    }
}