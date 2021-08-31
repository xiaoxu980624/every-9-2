<template>
    <div>
          <input class="ipt" type="text" @click="$router.push('/shezhi')"  placeholder="设置密码">
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    mounted() {

    },
    methods: {

    },
};
</script>

<style scoped >
.ipt{
    width: 400px;
    height: 60px;
    margin-left: 20px;
    border: none;
}
</style>
