export interface IPaymeMethod {
    setSecretKey(secret: string): void
    setPaymeId(id: string): void
}