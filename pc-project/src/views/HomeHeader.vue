<template>
	<header>
		<div class="top">
			<h1 class="tpic">尚品美食汇</h1>
			<div class="list">
				<ul>
					<li>
						<router-link to="/page1" class="linkt">首页</router-link>
					</li>
					<li>
						<router-link to="/page2" class="linkt"></router-link>
					</li>
					<li>
						<router-link to="/page3" class="linkt">排行</router-link>
					</li>
					<li>
						<router-link to="/page4" class="linkt">搜索</router-link>
					</li>
				</ul>
			</div>
			<div class="top-right" v-show="$store.state.isshow">
				<div @click="toLogin" class="linkt">注册</div>
				<div @click="toLogin2" class="linkt">登录</div>
			</div>
			<div class="top-right" v-if="!$store.state.isshow">
				<div @click="toMyPage">
					<img :src="$store.state.user[0].head_src">
				</div>
			</div>
		</div>
	</header>
	
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				
			}
		},
		methods: {
			toLogin2() {
				this.$router.push("/login")
			},
			toLogin(){
				this.$router.push("/register")
			},
			toMyPage(){
				this.$router.push("/menu")
			}
		}
	}
</script>

<style>
	header {
		background-color: #333333;
		color: #CACACA;
		height: 40px;
		width: 100%;
		line-height: 40px;
	}

	.top {
		display: flex;
		padding: 0 20px;
	}

	.tpic {
		font-size: 17px;
	}

	div ul li {
		list-style: none;
		padding: 0 10px;
		font-size: 14px;
	}

	.list ul {
		display: flex;
		justify-content: space-around;
		font-size: 30px;
	}

	.linkt {
		color: #CACACA;
		text-decoration: none;
	}

	.linkt:hover {
		color: white;
		background-color: #000;
	}

	.top-right {
		display: flex;
		position: absolute;
		right: 10px;
	}

	.top-right .linkt {
		width: 50px;
	}

	.top-right div {
		margin: 0 5px;
	}

	.top-right img {
		width: 40px;
		border-radius: 20px;
	}
</style>
