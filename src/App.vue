<template>
  <div id="app">
  	<message></message>
    <top-header></top-header>
    <router-view/>
  </div>
</template>

<script>
	import TopHeader from '@/components/common/TopHeader'
	import Message from '@/components/common/Message'

	export default {
		name: 'app',
		components: {
			TopHeader,
			Message
		}
	}
</script>

