import { PaymeClient } from "../src"

describe('Checks if auth data is provided', () => {
    test('must throw an error if secret key is not provided', async () => {
        const subscribeApi = PaymeClient.create("subscribe")

        try {
            await subscribeApi.receiptsCreate({
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
        } catch (error: any) {
            expect(error.message).toEqual("Secret key is required")
        }
    })

})