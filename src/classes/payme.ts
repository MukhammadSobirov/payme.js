import { IPaymeMethod } from "../types/payme-method";

export abstract class Payme {
    public abstract init(): IPaymeMethod
}