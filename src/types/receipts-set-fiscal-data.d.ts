export interface IReceiptsSetFiscalDataPayload {
    requestId: number;
    params: {
        id: string;
        fiscal_data: IFiscalData;
    };
}

interface IFiscalData {
    status_code: number;
    message: string;
    terminal_id: string;
    receipt_id: number;
    date: string;
    fiscal_sign: string;
    qr_code_url: string;
}
