<template>
  <div id="app">
    <top-header></top-header>
    <router-view/>
  </div>
</template>

<script>
	import TopHeader from '@/components/common/TopHeader'

	export default {
		name: 'app',
		components: {
			TopHeader
		}
	}
</script>

