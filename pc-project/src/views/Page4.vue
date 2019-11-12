<template>
	<div  v-title data-title="搜索_尚品美食汇">
		<div class="Title">美食搜索</div>
		<div class="searchbox">
			<input v-model.lazy="ingredients" type="text" class="inputkuang" placeholder="搜索菜谱|食材|主题...">
			<button @click="ingSearch()">搜索</button>
		</div>
		<!-- 搜索结果 -->
		<div class="resultfoods">
			<div class="resulthead">
				<p>{{ingredients}}</p><span>约{{mydata.length}}条结果</span>
			</div>
			<!-- 食物列表组件 -->
			<Page4result :myarr="mydata"></Page4result>
		</div>
	</div>

</template>

<script>
	import Page4result from "./Page4result"
	export default {
		name: "Page4",
		components: {
			Page4result
		},
		data() {
			return {
				ingredients: '',
				mydata: []
			}
		},
		methods: {
			ingSearch() {
				let mykey = this.ingredients;
				this.axios.get(`http://localhost:8888/fromkey?mykey=${mykey}`).then(response => {
					console.log("get发送Ajax请求成功", response.data);
					this.mydata = response.data;
				}).catch(response => {
					console.log("get发送Ajax请求失败", response);
				})
			}
		},
		mounted() {
			this.ingredients = this.$store.state.lxj;
			let mykey = this.ingredients;
			if (mykey == '') {
				return
			}
			this.axios.get(`http://localhost:8888/fromkey?mykey=${mykey}`).then(response => {
				console.log("get发送Ajax请求成功", response.data);
				this.mydata = response.data;
			}).catch(response => {
				console.log("get发送Ajax请求失败", response);
			})
		}
	}
</script>

<style scoped>
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

	.searchbox {
		width: 644px;
		height: 44px;
		margin: 0 auto;
		position: relative;
	}

	.inputkuang {
		border: 2px solid #FF6767;
		width: 644px;
		height: 44px;
		/* margin: 8px 0 0 0; */
		padding: 0 10px;
		box-sizing: border-box;
		outline: none;
		font-size: 16px;
	}

	button {
		width: 100px;
		height: 42px;
		background-color: #FF6767;
		border: none;
		color: white;
		font-family: "microsoft yahei";
		font-size: 16px;
		position: absolute;
		right: 0;
		bottom: 0;
		outline: none;
		cursor: pointer;
	}

	/* 查询结果头部 */
	.resultfoods {
		width: 990px;
		margin: 20px auto;
	}

	.resulthead {
		display: flex;
		/* padding: 0 0 5px 0; */
		border-bottom: 1px solid #CCCCCC;
		align-items: center;
	}

	.resulthead p {
		font-size: 24px;
		color: #ff6767;
		padding-bottom: 3px;
		font-family: "microsoft yahei";
		border-bottom: 4px solid #FF6767;
	}

	.resulthead span {
		margin-left: 20px;
		font-size: 14px;
		color: #999999;
	}
</style>
