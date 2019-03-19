import { Ingredient } from '../shared/ingredient.model';

export class Recipe {

    private name: string;
    private description: string;
    private imagePath: string;
    private ingredients: Ingredient[];

    constructor(name: string, description: string, imagePah: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePah;
        this.ingredients = ingredients;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getImagePath(): string {
        return this.imagePath;
    }

    getIngredients(): Ingredient[] {
        return this.ingredients;
    }

    setName(name: string): void {
        this.name = name;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    setImagePath(imagePath: string): void {
        this.imagePath = imagePath;
    }
}
