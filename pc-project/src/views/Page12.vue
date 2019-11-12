<template>
	<div v-for="item in ToRanking">
		<img :src="item.imgUrl">
	</div>
</template>

<script>
	export default {
		name: "Page12",
		data() {
			return {
				ToRanking: [{
						imgUrl: "https://static.meishichina.com/v6/img/zhen/r01.jpg"
					},
					{
						imgUrl: "https://static.meishichina.com/v6/img/zhen/r02.jpg"
					},
					{
						imgUrl: "https://static.meishichina.com/v6/img/zhen/r03.jpg"
					},
					{
						imgUrl: "https://static.meishichina.com/v6/img/zhen/r04.jpg"
					},
					{
						imgUrl: "https://static.meishichina.com/v6/img/zhen/r05.jpg"
					},
				]
			}
		},
	}
</script>

<style>
</style>
