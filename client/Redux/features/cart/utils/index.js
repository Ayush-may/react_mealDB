export function findAndIncrementCartItemByMealId(carts, mealId) {
    carts.map(cart => {
        if (cart.mealId === mealId) {
            incrementCartItem(cart);
        }
    })
}

function incrementCartItem(cart) {
    const quantity = Number.parseInt(cart.quantity) + 1;
    cart.quantity = quantity + "";
}