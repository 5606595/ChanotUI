<template>
    <div class="j-checkboxgroup">
        <checkbox v-for="option in options">
            {{ option }}
        </checkbox>
    </div>
</template>
<style lang="less">

</style>
<script>
    import checkbox from './checkbox.vue'
    export default {
        components: {
            'checkbox': checkbox
        },
        data() {
            return {

            }
        },
        props: {
            options: {
                type: Array
            }
        },
        methods: {}
    }
</script>