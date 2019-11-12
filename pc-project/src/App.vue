<template>
	<div id="app">
		<!-- Home和Login下的内容 -->
		<router-view></router-view>
	</div>
	
</template>

<script>
	export default {
		name: 'app',
		components: {}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* text-align: center; */
		color: #2c3e50;
		/* margin-top: 60px; */
	}
	template {
		font-family: "microsoft yahei";
	}
	@media screen and (max-width:650px){
	    #app{
	        width: 650px;
	    }
	}
</style>
