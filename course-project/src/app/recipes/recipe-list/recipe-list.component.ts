import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe(`A Test Recipe`, `This is simply a test`, `https://www.organicauthority.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTU5MzI5NjY4NDE2Njc3MDc4/avocado-toast.webp`),
        new Recipe(`Another Test Recipe`, `This is simply another test`, `https://www.organicauthority.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTU5MzI5NjY4NDE2Njc3MDc4/avocado-toast.webp`)
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
