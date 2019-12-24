<template>
	<div>
		<div class="card" style="width: 15rem;">
		  <img class="card-img-top" src="https://via.placeholder.com/200" :alt="product.title">
		  <div class="card-body">
		    <a href="#">{{ product.title }}</a> ${{ product.price }}
			<p> {{product.description}}</p>
			<a href="#" class="btn btn-light" @click.prevent="addToCart">Add to cart</a>
		  </div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'product',
		props: ['product'],
		methods: {
			...mapActions({
				addProductToCart: 'addProductToCart'
			}),
			addToCart () {
				this.addProductToCart({
					product: this.product,
					quantity: 1
				})
			}
		}
	}
</script>