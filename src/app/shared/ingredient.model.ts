export class Ingredient {
    constructor(private name: string, private amount: number) {
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }

    public getName(): string {
        return this.name;
    }

    public getAmount(): number {
        return this.amount;
    }
}
