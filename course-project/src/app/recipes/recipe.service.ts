import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(`A Test Recipe`, `This is simply a test`, `https://www.organicauthority.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTU5MzI5NjY4NDE2Njc3MDc4/avocado-toast.webp`, [new Ingredient('Test ingredient 1', 1), new Ingredient(`test ingredient 2`, 11)]),
        new Recipe(`Another Test Recipe`, `This is simply another test`, `https://www.organicauthority.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTU5MzI5NjY4NDE2Njc3MDc4/avocado-toast.webp`, [new Ingredient('another test ingredient', 33)])
    ];

    getRecipes() {
        return this.recipes.slice(); // return a copy (slice())
    }

}