<template>
	<div>
		<h2 class="ingredient">做法步骤</h2>
		<div>
			<ul class="stepul">
				<div>
					<li v-for="(item,index) in $store.state.toStep" :key="index">
						<div class="words">{{index+1}}--{{$store.state.toStep[index]}}</div>
					</li>
				</div>
				<div>
					<li v-for="(item,index) in $store.state.toStrImg" :key="item">
						<img :src="$store.state.toStrImg[index]" id="theimgs">
					</li>
				</div>
			</ul>
		</div>
	</div>

</template>

<script>
	export default {
		name: "Page2Step"
	}
</script>

<style scoped="scoped">
	.ingredient {
		color: #FF6767;
		padding: 20px 0;
		border-top: 1px solid #999999;
	}

	.words {
		font-size: 20px;
		margin-bottom: 219px;
	}
	
	.stepul{
		display: flex;
		
	}
	#theimgs {
		width: 320px;
		height: 240px;
	}
</style>
