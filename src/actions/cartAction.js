export function addToCart(productId) {
    return {
        type: CART_ADD,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        payload: {
            productId
        }
    }
}
// selectors
export function isInCart(state, props) {
    return state.cart.item.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
    return state.cart.item.map(id => getProduct(state, { id }));
}

// export function getCurrency(state, props) {
//     return state.cart.currency;
// }

export function getTotal(state, props) {
    return state.cart.item.reduce((acc, id) => {
        const item = getProduct(state, { id });
        return acc + item.price;
    }, 0);
}
