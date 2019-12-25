<template>
	<div>
		<ul class="list-group" v-if="cart.length">
		    <li class="list-group-item" v-for="item in cart">
		    	{{ item.quantity }} x {{ item.product.title }} @ ${{ item.product.price }}
		    	<a href="#" class="badge badge-danger" @click.prevent="removeProductFromCart(item.product.id)">Remove</a>
		    </li>
		    <li class="list-group-item">
		    	<a href="#" class="badge badge-pill badge-dark" @click.prevent="removeAllProductFromCart">
		    		Clear cart
		    	</a>
		    </li>
		</ul>
		<p v-else class="lead">No items in cart</p>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'mini-cart',
		computed: {
			...mapGetters({
				cart: 'shopping/cart'
			})
		}, 

		methods: {
			...mapActions({
				getCart: 'shopping/getCart',
				removeProductFromCart: 'shopping/removeProductFromCart',
				removeAllProductFromCart: 'shopping/removeAllProductFromCart'
			})
		},

		mounted () {
			this.getCart()
		}
	}
</script>