<template>
    <div>
        <div class="head">
            <div class="text">{{$store.state.user[0].name}}的日志</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Journal',
        data(){
            return {
                username:'卟得了'
            }
        }
    }
</script>


<style scoped>
    .head{
        font-size: 24px;
        color: #ff6767;
        border-bottom: 1px #eee solid;
        margin: 30px 120px;
    }
    .text{
        display: inline-block;
        border-bottom: #ff6767 3px solid;
    }
</style>