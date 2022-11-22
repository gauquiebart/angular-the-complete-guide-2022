import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

import {SharedModule} from "../shared/shared.module";

import {RecipesComponent} from "./recipes.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipeSelectComponent} from "./recipe-select/recipe-select.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipesRoutingModule} from "./recipes-routing.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeSelectComponent,
        RecipeEditComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        RecipesRoutingModule]
})
export class RecipesModule {

}