<template>
	<div v-title data-title="分类_尚品美食汇">
		<h1 class="Title">菜品详情在这里</h1>
		<img src="https://static.meishichina.com/img/banner/6.jpg" id="ad">
		<!-- 菜品详情介绍 -->
		<div class="Food-introduction">
			<h1 class="food_name">{{$store.state.toobj.imgInfo}}</h1>
			<img :src="$store.state.toobj.imgUrl" id="theimg">
			<div class="text">{{$store.state.toobj.description}}</div>

			<h2 class="ingredient">食材明细</h2>
			<div class="peilao">
				<h2>主料：</h2>
				{{$store.state.to3obj.main_material}}
			</div>
			<div class="peilao">
				<h2>辅料：</h2>
				{{$store.state.to3obj.subsidiary_material}}
			</div>
			<div class="peilao">
				<h2>其他：</h2>
				{{$store.state.to3obj.other}}
			</div>
			<Page2-step></Page2-step>
		</div>
	</div>
</template>

<script>
	import Page2Step from "./Page2Step"
	export default {
		name: "Page2",
		components: {
			Page2Step
		}
	}
</script>

<style scoped="scoped">
	#ad {
		margin-left: 264px;
	}
	.Title {
		font-size: 30px;
		font-weight: 900;
		width: 990px;
		margin: 30px auto;
		border: 1px solid #FF6767;
		border-left: 0;
		border-right: 0;
		position: relative;
		color: #FF6767;
	}

	.Food-introduction {
		font-family: "microsoft yahei";
		width: 990px;
		/* background-color: #C0CCDA; */
		margin: 0 auto;
	}

	.food_name {
		padding: 10px 0;
	}
	#theimg {
		width: 640px;
		height: 480px;
		margin-left: 189px;
	}
	.text {
		width: 640px;
		margin: 20px auto;
		word-wrap: normal;
	}
	.ingredient {
		color: #FF6767;
		padding: 20px 0;
		border-top: 1px solid #999999;
	}
	.peilao {
		display: flex;
		margin: 20px 0;
		margin-left: 160px;
		border: 1px solid #999;
		width: 800px;
		height: 100px;
		border-radius: 50px;
		padding-left: 40px;
		padding-top: 30px;
		box-sizing: border-box;
		font-size: 20px;
	}
</style>
