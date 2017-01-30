<template>
    <div class="j-checkboxgroup">
        <div class="detail">
            <checkbox v-for="(option, index) in dealOptions" :title="option.title" v-bind:isselected="values.indexOf(option.content) !== -1" @change="changeEvent">
                {{ option.content }}
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
            dealOptions() {
                let arr = [];
                this.options.map((data, index) => {
                    if(data.content) {
                        if(data.title) {
                            arr[index] = {
                                content: data.content,
                                title: data.title
                            }
                        } else {
                            arr[index] = {
                                content: data.content,
                                title: data.content
                            }
                        }
                    } else {
                        arr[index] = {
                            content: data,
                            title: data
                        }
                    }
                });
                return arr
            }
        },
        props: {
            options: {
                type: Array,
                default: []
            },
            values: {
                type: Array,
                default: []
            },
            titles: {
                type: Array,
                default: []
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