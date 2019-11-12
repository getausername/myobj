<template>
	<div class="foodlist">
		<div v-for="(item, index) in myarr" id="sign">
			<div class="imgbox">
				<img :src="item.imgUrl" @click="tomenu(index)">
			</div>
			<p class="imgInfo">{{item.imgInfo}}</p>
			<p class="author">{{item.author}}</p>

		</div>
	</div>
</template>

<script>
	export default {
		name: "Page11",
		props: ["myarr"],
		methods: {
			tomenu(index) {
				console.log(this.myarr[index].imgInfo)
				this.axios.get("http://localhost:8888/food_details", {
					params: {
						foodname: this.myarr[index].imgInfo,
						author: this.myarr[index].author
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
						foodname: this.myarr[index].imgInfo,
						// author: this.myarr[index].author
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

	}
</script>

<style>
	.imgbox {
		width: 230px;
		height: 230px;
		overflow: hidden;
	}

	.imgbox img {
		cursor: pointer;
		transition: all 0.6s;
	}

	.imgbox img:hover {
		transform: scale(1.1);
	}

	.foodlist {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	#sign {
		margin-top: 20px;
	}

	.foodlist img {
		width: 230px;
		height: 230px;
	}

	.imgInfo {
		font-size: 18px;
		margin: 8px 0 2px;
	}

	.author {
		font-size: 12px;
		color: #999;
	}
</style>
