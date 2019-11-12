<template>
	<div v-title data-title="排行_尚品美食汇">
		<h1 class="hy">美食排行</h1>
		<Page31></Page31>
	</div>
</template>

<script>
	import Page31 from "./Page31.vue"
	export default {
		name: "Page3",
		components: {
			Page31
		}
	}
</script>

<style scoped>
	.hy {
		font-size: 30px;
		font-weight: 900;
		width: 990px;
		margin: 30px auto;
		border: 1px solid #409EFF;
		border-left: 0;
		border-right: 0;
		position: relative;
		color: #409EFF;
	}
</style>
