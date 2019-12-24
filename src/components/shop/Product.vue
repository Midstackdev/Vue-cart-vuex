<template>
	<div>
		<div class="card" style="width: 15rem;">
		  <img class="card-img-top" src="https://via.placeholder.com/200" :alt="product.title">
		  <div class="card-body">
		    <a href="#">{{ product.title }}</a> ${{ product.price }}
			<p> {{product.description}}</p>
			<a href="#" class="btn btn-light">Add to cart</a>
		  </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'product',
		props: ['product']
	}
</script>