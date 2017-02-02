<template>
    <div class="j-checkboxgroup">
        <div class="detail">
            <checkbox v-for="(option, index) in dealOptions" :disabled="option.disabled" :title="option.title" v-bind:isselected="values.indexOf(option.content) !== -1" @change="changeEvent">
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
                        if(data.disabled) {
                            arr[index].disabled = true;
                        } else {
                            arr[index].disabled = false;
                        }
                        if(data.select) {
                            arr[index].select = true;
                        } else {
                            arr[index].select = false;
                        }
                    } else {
                        arr[index] = {
                            content: data,
                            title: data,
                            disabled: false,
                            select: false
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