<template>
	<div v-title data-title="首页_尚品美食汇">
		<div class="Title">菜谱首页
			<div class="search">
				<input type="text" placeholder="美味搜索即达" v-model="lpd">
				<button @click="passkey">
					<img src="../assets/search_icon.png">搜索
				</button>
			</div>
		</div>
		<div class="lunbotu">
			<el-carousel :interval="4000" type="card" height="200px">
				<el-carousel-item v-for="item in rotation_img" :key="item">
					<img :src="item" id="rot_img">
				</el-carousel-item>
			</el-carousel>
			</el-carousel>
		</div>
		<!-- 图标跳转 -->

		<div class="foodsnavbox">
			<!-- 导航栏 -->
			<div class="foodsnav">
				<ul>
					<li v-for="(item,index) in arr" :key="index">
						<div class="rotlink" @click="myfunc(index)"> {{ item }}</div>
					</li>
				</ul>
			</div>
			<page11 :myarr="mydata"></page11>
		</div>
	</div>
</template>

<script>
	import Page11 from "../views/Page11.vue"
	export default {
		name: "Page1",
		methods: {
			myfunc(index) {
				for (let i = 0; i < this.arr.length; i++) {
					var mydivs = document.getElementsByClassName("rotlink");
					mydivs[i].style.color = "black"
					if (i == index) {
						let mydiv = document.getElementsByClassName("rotlink")[i];
						mydiv.style.color = "#FF6767"
					}
				}
				console.log(index)
				this.axios.get(`http://localhost:8888/foods`,{
					params:{
						id:index
					}
				}).then(response => {
					console.log("get发送Ajax请求成功", response.data);
					this.mydata = response.data;
				}).catch(response => {
					console.log("get发送Ajax请求失败", response);
				})
			},
			passkey() {
				this.$store.state.lxj = this.lpd
				this.$router.push("/page4")
			}
		},
		components: {
			Page11
		},
		data() {
			return {
				lpd: '',
				islook: true,
				mydata: [],
				rotation_img: [
					"https://i3.meishichina.com/attachment/magic/2019/10/11/2019101115707601342458197577.jpg",
					"https://i3.meishichina.com/attachment/magic/2019/10/24/2019102415718889131068197577.jpg",
					"https://i3.meishichina.com/attachment/magic/2019/10/22/2019102215717133451628197577.jpg",
					"https://i3.meishichina.com/attachment/magic/2019/09/24/2019092415693054886298197577.jpg"
				],
				arr: ["最新推荐", "最新发布", "热菜", "凉菜", "汤羹", "主食", "小吃", "西餐", "烘焙", "全部>"]
			}
		},
		created() {
			this.axios.get(`http://localhost:8888/foods?id=0`).then(response => {
				console.log("get发送Ajax请求成功", response.data);
				this.mydata = response.data;
			}).catch(response => {
				console.log("get发送Ajax请求失败", response);
			});
		},
		mounted() {
			let mydiv = document.getElementsByClassName("rotlink")[0];
			mydiv.style.color = "#FF6767";
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

	.search button {
		width: 80px;
		height: 28px;
		background-color: #999999;
		color: white;
		font-weight: 600;
		border: none;
		display: flex;
		justify-content: space-around;
		padding: 0 8px;
		cursor: pointer;
		outline: none;
	}

	.search button:hover {
		background-color: #FF6767;
	}

	.search {
		display: flex;
		position: absolute;
		right: 0;
		top: 8px;
	}

	.search input {
		outline: none;
	}

	.search img {
		width: 18px;
		height: 18px;
	}

	.lunbotu {
		width: 990px;
		margin: 0px auto;
	}

	#rot_img {
		width: 495px;
		height: 200px;
	}


	/* <!-- 导航栏 --> */

	.foodsnavbox {
		width: 990px;
		margin: 0 auto;
	}

	.foodsnav ul,
	li {
		list-style: none;
		display: flex;
		justify-content: flex-start;
		border-bottom: 1px solid #EAE4E4;
	}

	.rotlink {
		font-family: "Microsoft YaHei";
		text-decoration: none;
		font-size: 20px;
		color: #000000;
		border-bottom: 2px solid white;
		cursor: pointer;
	}

	.rotlink:hover {
		color: #FF6767;
		border-bottom: 2px solid #FF6767;
	}
</style>
