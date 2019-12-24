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
export const addProductToCart = ({ commit }, { product, quantity }) => {
	commit('appendToCart', {product, quantity})

	return axios.post('http://localhost:8002/api/cart', {
		product_id: product.id,
		quantity
	})
}
// remove a product from our cart cart
// remove all products from our cart cart