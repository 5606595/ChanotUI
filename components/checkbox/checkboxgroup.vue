<template>
    <div class="j-checkboxgroup">
        <div class="detail">
            <checkbox v-for="(option, index) in options" v-bind:isselected="values.indexOf(option) !== -1" @change="changeEvent">
                {{ option }}
            </checkbox>
        </div>
    </div>
</template>
<style lang="less" scoped rel="stylesheet/less">
</style>
<script type="text/ecmascript-6">
    import checkbox from './checkbox.vue'
    export default {
        components: {
            'checkbox': checkbox
        },
        data() {
            return {
            }
        },
        computed: {

        },
        props: {
            options: {
                type: Array
            },
            values: {
                type: Array
            }
        },
        methods: {
            changeEvent(param) {
                let i = this.values.indexOf(param);
                if(i === -1) {
                    this.values.push(param);
                } else {
                    this.values.splice(i, 1);
                }
                this.$emit("change");
            }
        }
    }
</script>