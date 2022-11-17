import {Recipe} from "./recipe.model";
import {Subject} from "rxjs";

export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [];

    /*  private recipes: Recipe[] = [
      new Recipe(`A Test Recipe`, `This is simply a test`, `https://www.organicauthority.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTU5MzI5NjY4NDE2Njc3MDc4/avocado-toast.webp`, [new Ingredient('Test ingredient 1', 1), new Ingredient(`test ingredient 2`, 11)]),
      new Recipe(`Another Test Recipe`, `This is simply another test`, `https://www.organicauthority.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTU5MzI5NjY4NDE2Njc3MDc4/avocado-toast.webp`, [new Ingredient('another test ingredient', 33)])
  ];*/

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice(); // return a copy (slice())
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}