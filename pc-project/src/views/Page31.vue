<template>
	<div class="bigbox">
		<el-tabs v-model="activeName" @tab-click="handleClick" class="nav">
			<el-tab-pane label="一周热卖" name="first">
				<Page32 :myarr="mydata"></Page32>
			</el-tab-pane>
			<el-tab-pane label="当季最热" name="second">
				<Page32 :myarr="mydata"></Page32>
			</el-tab-pane>
			<el-tab-pane label="人气佳肴" name="third">
				<Page32 :myarr="mydata"></Page32>
			</el-tab-pane>
			<el-tab-pane label="明星菜谱" name="fourth">
				<Page32 :myarr="mydata"></Page32>
			</el-tab-pane>
			<el-tab-pane label="食神菜单" name="fivth">
				<Page32 :myarr="mydata"></Page32>
			</el-tab-pane>
		</el-tabs>
		<el-pagination 
		background 
		layout="prev, pager, next" 
		:total="totalCount" 
		:page-size="5" 
		>
		</el-pagination>
	</div>
</template>

<script>
	import Page32 from "./Page32.vue"
	export default {
		name: "Page31",
		components: {
			Page32
		},
		data() {
			return {
				mydata: [],
				activeName: 'first',
				totalCount:0
			};
		},
		created() {
			this.getShowCount();
			this.axios.get(`http://localhost:8888/foods?id=0`).then(response => {
				console.log("get发送Ajax请求成功", response.data);
				this.mydata = response.data;
				this.totalCount = response.data.length;
				// this.$store.state.turnPage = response.data
			}).catch(response => {
				console.log("get发送Ajax请求失败", response);
			})
		},
		methods: {
			getShowCount(){
				this.axios.get(`http://localhost:8888/foods?id=0`).then(response => {
					console.log("get发送Ajax请求成功", response.data);
					this.totalCount = response.data.length;
					// this.$store.state.turnPage = response.data
				}).catch(response => {
					console.log("get发送Ajax请求失败", response);
				})
			},
			handleClick(tab, event) {
				console.log(tab, event);
				console.log(tab._uid); //14,16,18,20,22
				let index;
				switch (tab._uid) {
					case 16:
						index = 0;
						break;
					case 18:
						index = 2;
						break;
					case 20:
						index = 1;
						break;
					case 22:
						index = 3;
						break;
					case 24:
						index = 4;
						break;
				}
				this.axios.get(`http://localhost:8888/foods?id=${index}`).then(response => {
					console.log("get发送Ajax请求成功", response.data);
					this.mydata = response.data;
				}).catch(response => {
					console.log("get发送Ajax请求失败", response);
				})
			}
		}
	}
</script>

<style>
	.bigbox {
		width: 990px;
		margin: 0 auto;
	}
</style>
