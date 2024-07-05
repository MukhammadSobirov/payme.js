export interface IReceiptsCancelResponse {
    jsonrpc: string;
    id: number;
    result: {
        receipt: {
            _id: string;
            create_time: number;
            pay_time: number;
            cancel_time: number;
            state: number;
            type: number;
            external: boolean;
            operation: number;
            category: string | null;
            error: string | null;
            description: string;
            detail: string | null;
            amount: number;
            commission: number;
            account: {
                name: string;
                title: string;
                value: string;
            }[];
            card: string | null;
            merchant: {
                _id: string;
                name: string;
                organization: string;
                address: string;
                epos: {
                    merchantId: string;
                    terminalId: string;
                };
                date: number;
                logo: string | null;
                type: string;
                terms: string | null;
            };
            meta: string | null;
        };
    };
}
