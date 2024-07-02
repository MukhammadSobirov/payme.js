import { PaymeClient } from "../src"

describe("Tests the correct creation of products given the parameter", () => {
    test("initiates merchant api client correctly", () => {
        const merchantApi = PaymeClient.create('merchant').init()
    
        expect(merchantApi.methodName).toEqual("merchant")
    })

    test("initiates subscribe api client correctly", () => {
        const subscribeApi = PaymeClient.create('subscribe').init()
    
        expect(subscribeApi.methodName).toEqual("subscribe")
    })
})
