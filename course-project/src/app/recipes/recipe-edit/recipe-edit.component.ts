import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    id!: number;
    editMode = false;
    recipeForm!: FormGroup;

    constructor(private route: ActivatedRoute,
                private recipeService: RecipeService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.editMode = params['id'] != null;
                this.initForm();
            }
        );
    }

    private initForm() {
        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescription = '';
        const recipeIngredients = new FormArray<FormGroup>([]);

        if (this.editMode) {
            const recipe = this.recipeService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            if (recipe.ingredients) {
                for (let ingredient of recipe.ingredients) {
                    recipeIngredients.push(this.buildIngredientControl(ingredient.name, ingredient.amount));
                }
            }
        }

        this.recipeForm = new FormGroup({
            'name': new FormControl(recipeName, Validators.required),
            'imagePath': new FormControl(recipeImagePath, Validators.required),
            'description': new FormControl(recipeDescription, Validators.required),
            'ingredients': recipeIngredients
        });
    }

    onSubmit() {
        // const newRecipe = new Recipe(
        //     this.recipeForm.value['name'],
        //     this.recipeForm.value['description'],
        //     this.recipeForm.value['imagePath'],
        //     this.recipeForm.value['ingredients']);
        //bug: ingredients are not working yet ... 
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, this.recipeForm.value);
        } else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }
        this.onCancel();
    }

    ingredientControls() {
        return (<FormArray>this.recipeForm.get('ingredients')).controls;
    }

    onAddIngredient() {
        this.ingredientControls().push(this.buildIngredientControl(null, null));
    }

    buildIngredientControl(name: string | null, amount: number | null): FormGroup {
        return new FormGroup({
            'name': new FormControl(name, Validators.required),
            'amount': new FormControl(amount, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
        });
    }

    onCancel() {
        this.router.navigate(['../'], {relativeTo: this.route})
    }

    onDeleteIngredient(index: number) {
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }
}
