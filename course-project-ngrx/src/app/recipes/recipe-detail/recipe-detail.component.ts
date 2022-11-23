import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Store} from "@ngrx/store";
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducer';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    recipe!: Recipe;
    id!: number;

    constructor(private recipeService: RecipeService,
                private route: ActivatedRoute,
                private router: Router,
                private store: Store<fromShoppingList.AppState>) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipes()[this.id];
            }
        )
    }

    onAddIngredientsToShoppingList() {
        this.store.dispatch(new ShoppingListActions.AddIngredients([...this.recipe.ingredients]));
    }

    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }
}
