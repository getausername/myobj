<template>
	<footer>
		<div class="left">
			<p class="atop">尚品美食汇·让吃更美好</p>
			<p>
				<a href="#">菜谱</a>·
				<a href="#">食材</a>·
				<a href="#">魔方</a>·
				<a href="#">关于我们</a>·
				<a href="#">联系我们</a>·
				<a href="#">加入我们</a>·
				<a href="#">服务声明</a>·
				<a href="#">友情链接</a>·
				<a href="#">网站地图</a>·
				<a href="#">移动应用</a>
			</p>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "Footer"
	}
</script>

<style>
	footer {
		height: 100px;
		display: flex;
		justify-content: center;
		font-weight: 700;
		margin-left: -346px;
	}

	.atop {
		color: #ff5500;
		font-size: 20px;
	}

	footer a {
		text-decoration: none;
		color: #000000;
		font-weight: 400;
	}

	footer .left {
		padding-top: 30px;
		align-items: center;
	}
</style>
