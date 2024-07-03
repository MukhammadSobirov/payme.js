export interface IShipping {
    /**
     * address
     * @description Адрес доставки товара или услуги. Необязательное поле
     * @example "Доставка до ттз-4 28/2"
     */
    title: string;
}

export interface IItem {
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

export interface IDetail {
    /**
     * receipt_type
     * @deprecated Продажа/Возврат = 0
     */
    receipt_type: number;
    shipping?: IShipping;
    items: IItem[];
}

export interface IParams {
    amount: number;
    account: any;
    detail: IDetail;
    description?: string;
}

export interface IReceiptsCreatePayload {
    id: number;
    params: IParams;
}
