export type CartItemType = {
    cart: [],
    removeFromCart: (value: {}) => void,
    clearCart: (value: {}) => void,
    increaseAmount: (value: {}) => void,
    decreaseAmount: (value: {}) => void,
    addToCart: (value: {}) => void,
    total: number,
    itemAmount: number
}