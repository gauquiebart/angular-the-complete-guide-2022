import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list-service";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    @Input() recipe!: Recipe;

    constructor(private shoppingList: ShoppingListService) {
    }

    ngOnInit(): void {
    }


    onAddIngredientsToShoppingList() {
        this.recipe.ingredients.forEach(ingredient => this.shoppingList.addIngredient(ingredient));
    }
}
