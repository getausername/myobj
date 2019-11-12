<template>
	<div class="out">
		<!-- 顶部固定导航栏 -->
		<Home-Header></Home-Header>
		<!-- 点击返回顶部 -->
		<Home-To-Top></Home-To-Top>
		<!-- 顶部固定导航栏跳转的内容 -->
		<router-view></router-view>
		<!-- 页脚 -->
		<Home-footer></Home-footer>
	</div>
</template>

<script>
	import HomeFooter from "../views/HomeFooter.vue"
	import HomeHeader from "../views/HomeHeader.vue"
	import HomeToTop from "../views/HomeToTop.vue"
	export default {
		name: "Home",
		components: {
			HomeFooter,
			HomeHeader,
			HomeToTop
		}
	}
</script>

<style>
</style>
