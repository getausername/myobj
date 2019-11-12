<template>
	<div>
		<div class="head">
			<div class="text">{{$store.state.user[0].name}}的菜谱</div>
		</div>
		<div class="foodlist">
			<div v-for="(item,index) in $store.state.user" id="sign" :key="index" @click="tomenu(index)">
				<div class="imgbox">
					<img :src="item.src" />
				</div>
				<p class="imgInfo">{{item.dishes_name}}</p>
			</div>
			<el-pagination background layout="prev, pager, next" :total="100" class="page"></el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Menu",
		data() {
			return {

			};
		},
		methods: {
			tomenu(index) {
				this.axios.get("http://localhost:8888/food_details", {
					params: {
						foodname: this.$store.state.user[index].dishes_name,
						author: this.$store.state.user[0].name
					}
				}).then(response => {
					console.log("get发送Ajax请求成功",'简介',response.data);
					this.$store.state.toobj = response.data[0][0];
					this.$store.state.toStep = response.data[1];
					this.$store.state.toStrImg = response.data[2];
					// console.log(this.$store.state.toStrImg)
					// console.log(this.$store.state.toStep)
				}).catch(response => {
					console.log("get发送Ajax请求失败", response);
				})
				// --------------------------
				this.axios.get("http://localhost:8888/Ingredients", {
					params: {
						foodname: this.$store.state.user[index].dishes_name,
						author: this.$store.state.user[index].name
					}
				}).then(response => {
					console.log("get发送Ajax请求成功",'食材');
					this.$store.state.to3obj = response.data[0];
					// console.log(this.$store.state.to3obj)
				}).catch(response => {
					console.log("get发送Ajax请求失败", response);
				})
				this.$router.push("/page2")
			}
		}
	};
</script>


<style scoped>
	.head {
		font-size: 24px;
		color: #ff6767;
		border-bottom: 1px #eee solid;
		margin: 30px 120px;
	}

	.text {
		display: inline-block;
		border-bottom: #ff6767 3px solid;
	}

	.imgbox {
		width: 200px;
		height: 200px;
		overflow: hidden;
		margin-left: 150px;
	}

	.imgbox img {
		cursor: pointer;
		transition: all 0.6s;
	}

	.imgbox img:hover {
		transform: scale(1.1);
	}

	#sign {
		margin-top: 20px;
	}

	.foodlist img {
		width: 200px;
		height: 200px;
	}

	.imgInfo {
		font-size: 18px;
		margin-left: 150px;
		width: 200px;
		text-align: center;
	}

	.page {
		margin-left: 130px;
	}
</style>
