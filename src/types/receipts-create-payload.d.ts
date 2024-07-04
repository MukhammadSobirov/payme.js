interface IReceiptsCreatePayloadShipping {
    /**
     * address
     * @description Адрес доставки товара или услуги. Необязательное поле
     * @example "Доставка до ттз-4 28/2"
     */
    title: string;
}

interface IReceiptsCreatePayloadItem {
    /**
     * discount
     * @description Скидка с учетом количества товаров или услуг в тийинах
     */
    discount?: number;

    /**
     * title
     * @description Наименование товара или услуги
     */
    title: string;

    /**
     * price
     * @description цена за единицу товара или услуги, сумма указана в тийинах
     */
    price: number;

    /**
     * count
     * @description Количество товара или услуги
     */
    count: number;

    /**
     * amount
     * @description  код *ИКПУ обязательное поле
     */
    code: string;

    /**
     * vat
     * @description значение изменится в зависимости от вида товара
     */
    units?: number;

    /**
     * vat_percent
     * @description обязательное поле, процент уплачиваемого НДС для данного товара или услуги
     */
    vat_percent: number;

    /**
     * package_code
     * @description Код упаковки для конкретного товара или услуги, содержится на сайте в деталях найденного ИКПУ
     */
    package_code: string;
}

interface IReceiptsCreatePayloadDetail {
    /**
     * receipt_type
     * @deprecated Продажа/Возврат = 0
     */
    receipt_type: number;
    shipping?: IReceiptsCreatePayloadShipping;
    items: IReceiptsCreatePayloadItem[];
}

interface IReceiptsCreatePayloadParams {
    amount: number;
    account: any;
    detail: IReceiptsCreatePayloadDetail;
    description?: string;
}

export interface IReceiptsCreatePayload {
    requestId: number;
    params: IReceiptsCreatePayloadParams;
}
