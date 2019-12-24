import axios from 'axios'

// get products
export const getProducts = ({ commit }) => {
	return axios.get('http://localhost:8002/api/products').then((response) => {
		commit('setProducts', response.data)
	})
}
// get cart
// add a product to our cart cart
// remove a product from our cart cart
// remove all products from our cart cart