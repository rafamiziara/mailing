export interface IProduct {
  name: string,
  amount: number,
  currency: string,
  description: string,
  quantity: number,
}

export interface IPaymentsProvider {
  createCheckout(products: IProduct[]): Promise<string>
}
