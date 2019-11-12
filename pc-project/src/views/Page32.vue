<template>
	<div class="box">
		<div v-for="(item,index) in myarr" class="onefood">
			<div class="imgbox">
				<img :src="item.imgUrl" @click="tomenu(index)">
			</div>
			<div class="info">
				<p>{{item.imgInfo}}</p>
				<p>{{item.author}}</p>
				<span>{{item.resource}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Page32",
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
		},
	}
</script>

<style scoped="scoped">
	.box {
		width: 990px;
		position: relative;
	}

	.imgbox {
		width: 180px;
		height: 180px;
		overflow: hidden;
		/* border-radius: 20px; */
	}

	.onefood {
		width: 820px;
		height: 200px;
		margin: 10px 0;
		display: flex;
		justify-content: space-between;
	}

	.onefood img {
		width: 180px;
		height: 180px;
		cursor: pointer;
		transition: all 0.6s;
	}

	.onefood img:hover {
		transform: scale(1.1);
	}

	.info {
		width: 620px;
		height: 180px;
		/* background-color: rgba(64, 158, 255, 0.15); */
		position: relative;
	}

	.info p:nth-child(1) {
		font-size: 20px;
		color: #333;
		padding-bottom: 15px;
		position: absolute;
		left: 0;
		top: 10px;
	}

	.info p:nth-child(2) {
		font-size: 14px;
		color: #999;
		padding-bottom: 5px;
		position: absolute;
		top: 45px;
	}

	.info :nth-child(3) {
		font-size: 14px;
		color: #333;
		position: absolute;
		left: 0;
		bottom: 60px;
	}
</style>
