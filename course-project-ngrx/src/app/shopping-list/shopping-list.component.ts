import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

import * as fromShoppingList from './store/shopping-list.reducer';
import * as fromApp from '../store/app.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

    ingredients$: Observable<fromShoppingList.State>;

    constructor(private store: Store<fromApp.AppState>) {
        this.ingredients$ = this.store.select('shoppingList');
    }

    onEditItem(index: number) {
        this.store.dispatch(new ShoppingListActions.StartEdit(index));
    }
}
