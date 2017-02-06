<template>
    <div class="dropdown-content" @mouseover="overin" @mouseleave="leaveout">
        <slot></slot>
    </div>
</template>
<style scoped rel="stylesheet/less" lang="less">

</style>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        methods: {
            overin() {
                console.log(1)
            },
            leaveout() {
                console.log(2)
            }
        }
    }
</script>
