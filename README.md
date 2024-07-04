# Payme.js

### Lightweight library to facilitate the integration of Payme payment gateway in your backend application.

### Basic usage

```typescript
import { PaymeClient } from 'payme';

// choose the API Type (Merchant API and Subscribe API)
const subscribeApi = PaymeClient.create('subscribe');

// set the API Key
subscribeApi.setSecretKey("your_secret_key");
subscribeApi.setPaymeId("your_public_key");

// optionaly you can control with wither to use test API or production
subscribeApi.setPaymeApiURL("production"); // or "dev"

const result = await subscribeApi.receiptsCreate({
        requestId: 1,
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
```