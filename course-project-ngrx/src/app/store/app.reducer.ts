import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer';

export interface AppState {
    shoppingList: fromShoppingList.State,
    auth: fromAuth.State
}

export const appReducer = {
    shoppingList: fromShoppingList.shoppingListReducer,
    auth: fromAuth.authReducer
};
