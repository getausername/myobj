<template>
  <div>
      <div class="head">
            <div class="text">{{$store.state.user[0].name}}的话题</div>
        </div>
  </div>
</template>

<script>
export default {
  name: "Topic"
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
</style>