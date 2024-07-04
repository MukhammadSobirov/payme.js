import { PaymeClient } from "../src"

describe('Should check if payme API url is set correctly depending on NODE_ENV', () => {
    test('payme api is set to test by default', () => {
        const clinet = PaymeClient.create("subscribe")

        expect(clinet.paymeApiURL).toEqual("https://checkout.test.paycom.uz/api")
    })

    test("payme api is set to production when users selects it", () => {
        const clinet = PaymeClient.create("subscribe");

        clinet.setPaymeApiURL("production")

        expect(clinet.paymeApiURL).toEqual("https://checkout.paycom.uz/api")
    })
})