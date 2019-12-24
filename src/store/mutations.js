// set products
export const setProducts = (state, products) => {
	state.products = products
}

// set cart
export const setCart = (state, items) => {
	state.cart = items
}
// clear cart
// remove from cart
// append to cart
export const appendToCart = (state, {product, quantity}) => {
	const existing = state.cart.find((item) => {
		return item.product.id === product.id
	})


	if (existing) {
		existing.quantity ++
	} else {

		state.cart.push({
			product,
			quantity: quantity
		})
	}
}