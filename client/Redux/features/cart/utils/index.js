export function findAndIncrementCartItemByMealId(carts, mealId) {
    carts.map(cart => {
        if (cart.mealId === mealId) {
            incrementAndDecrementCartItemByOne(cart, "INCREMENT");
        }
    })
}

export function findAndDecrementCartItemByMealId(carts, mealId) {
    carts.map(cart => {
        if (cart.mealId === mealId) {
            incrementAndDecrementCartItemByOne(cart, "DECREMENT");
        }
    })
}

function incrementAndDecrementCartItemByOne(cart, type) {
    let quantity = null;
    switch (type.toUpperCase()) {
        case "INCREMENT":
            quantity = Number.parseInt(cart.quantity) + 1;
            break;
        case "DECREMENT":
            quantity = Number.parseInt(cart.quantity) - 1;
            break;
    }
    cart.quantity = quantity + "";
}