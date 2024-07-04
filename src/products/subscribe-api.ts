import axios from "axios";
import { TApiMethodOption } from "../types/api-method-option";
import { IReceiptsCreatePayload } from "../types/receipts-create-payload";
import { ISubscribeApiProduct } from "../types/subscribe-api-product";
import { SUBSCRIBE_API_METHODS } from "../utils/subscribe-api-methods";
import { IReceiptsPayPayload } from "../types/receipts-pay-payload";
import { IReceiptsPayResponse } from "../types/receipts-pay-response";

export class SubscribeAPI implements ISubscribeApiProduct {


    private _secret = ""
    private _id = ""

    private readonly _test_api = "https://checkout.test.paycom.uz/api"
    private readonly _production_api = "https://checkout.paycom.uz/api"


    private _payme_api_url = process.env.NODE_ENV === "production" ? this._production_api : this._test_api;

    public methodName: TApiMethodOption = "subscribe"

    private paymeRequest = axios.create({
        baseURL: `${this.paymeApiURL}`,
        headers: {
            'X-Auth': `${this._id}:${this._secret}`,
        },
    });

    private validateCredentials(): void {
        if (!this._secret) {
            throw new Error("Secret key is required");
        }

        if (!this._id) {
            throw new Error("Payme ID is required");
        }

        axios.create({
            baseURL: `${this.paymeApiURL}`,
            headers: {
                'X-Auth': `${this._id}:${this._secret}`,
            },
        });
    }


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

    /**
     * receiptsCreate
     * @example:
     * ```typescript
     *  await subscribeApi.receiptsCreate({
                id: 1,
                params: {
                    amount: 100,
                    description: "Test",
                    account: undefined,
                    detail: {
                        receipt_type: 0,
                        items: [
                            {
                                code: "1",
                                count: 1,
                                package_code: "1",
                                price: 100,
                                title: "Test",
                                vat_percent: 0,
                                discount: 0,
                                units: 1,
                            }
                        ],
                    }
                }
            })
        * ```
     */
    async receiptsCreate(payload: IReceiptsCreatePayload): Promise<IReceiptsCreateResponse> {
        this.validateCredentials();

        try {
            const res = await this.paymeRequest.post('', {
                id: payload.requestId,
                method: SUBSCRIBE_API_METHODS.RECEIPTS_CREATE,
                params: {
                    amount: payload.params.amount,
                    account: payload.params.account,
                    detail: payload.params.detail,
                    description: payload.params.description,
                },
            });

            return res.data;
        } catch (error) {
            console.error(error);
            throw new Error("Error while creating receipt");
        }
    }

    /**
     * receiptsPay
     */
    async receiptsPay(payload: IReceiptsPayPayload): Promise<IReceiptsPayResponse> {
        this.validateCredentials();

        try {
            const res = await this.paymeRequest.post('', {
                id: payload.requestId,
                method: SUBSCRIBE_API_METHODS.RECEIPTS_PAY,
                params: {
                    id: payload.params.id,
                    token: payload.params.token,
                    payer: payload.params.payer,
                },
            });

            return res.data;
        } catch (error) {
            console.error(error);
            throw new Error("Error while paying receipt");
        }
    }

}