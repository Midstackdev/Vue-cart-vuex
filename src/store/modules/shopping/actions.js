import axios from 'axios'

// get products
export const getProducts = ({ commit }) => {
	return axios.get('http://localhost:8002/api/products').then((response) => {
		commit('setProducts', response.data)
		return Promise.resolve()
	})
}
// get cart
export const getCart = ({ commit }) => {
	return axios.get('http://localhost:8002/api/cart').then((response) => {
		commit('setCart', response.data)
		return Promise.resolve()
	})
}

// add a product to our cart cart
export const addProductToCart = ({ commit, dispatch }, { product, quantity }) => {
	commit('appendToCart', {product, quantity})

	dispatch('flashMessage', 'Item added to cart', {root: true})

	return axios.post('http://localhost:8002/api/cart', {
		product_id: product.id,
		quantity
	})
}
// remove a product from our cart
export const removeProductFromCart = ({ commit }, productId) => {
	commit('removeFromcart', productId)
	return axios.delete(`http://localhost:8002/api/cart/${productId}`).then((response) => {
		return Promise.resolve()
	})
}
// remove all products from our cart cart
export const removeAllProductFromCart = ({ commit, dispatch }) => {
	commit('clearCart')
	dispatch('flashMessage', 'All items removed from cart', {root: true})
	return axios.delete(`http://localhost:8002/api/cart/`)
}