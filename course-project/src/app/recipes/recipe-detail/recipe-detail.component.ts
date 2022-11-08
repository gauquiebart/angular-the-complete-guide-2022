import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list-service";
import {ActivatedRoute, Params} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    recipe!: Recipe;
    id!: number;

    constructor(private shoppingList: ShoppingListService,
                private recipes: RecipeService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipes.getRecipes()[this.id];
            }
        )
    }

    onAddIngredientsToShoppingList() {
        this.recipe.ingredients.forEach(ingredient => this.shoppingList.addIngredient(ingredient));
    }
}
