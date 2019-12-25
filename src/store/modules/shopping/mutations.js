// set products
export const setProducts = (state, products) => {
	state.products = products
}

// set cart
export const setCart = (state, items) => {
	state.cart = items
}
// clear cart
export const clearCart = (state) => {
	state.cart = []
}
// remove from cart
export const removeFromcart = (state, productId) => {
	const existing = state.cart.find((item) => {
		return item.product.id === productId
	})

	if (existing.quantity > 1) {
		existing.quantity--
	}else {
		state.cart = state.cart.filter((item) => {
			return item.product.id != productId
		})
	}
}
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