<template>
    <div class="dropdown-content">
        <slot></slot>
        <div v-html="overload"  class="overload" v-if="isAppear">

        </div>
    </div>
</template>
<style scoped rel="stylesheet/less" lang="less">
    @import '../../mixin/mixin.less';
    .dropdown-content {
        display: inline-block;
    }
</style>
<style lang="less" rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .overload {
        background: white;
        margin: 5px 0px;
        border: 1px solid @boxshadow;
        box-shadow: 0px 2px 5px @placeholder, 0px 0px 3px @placeholder;
        border-radius: 4px;
        a {
            text-decoration: none;
            display: block;
            padding: 10px 20px;
            color: black;
            &:hover {
                background: @ahover;
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                isAppear: true,
            }
        },
        components: {

        },
        computed: {
            left() {
                return this.$el.getBoundingClientRect().left
            },
            top() {
                return this.$el.getBoundingClientRect().top + this.$el.getBoundingClientRect().height
            }
        },
        methods: {
            overin() {
                this.isAppear = true;
            },
            leaveout() {
                this.isAppear = false;
            }
        },
        mounted() {
            if(!this.trigger.length) {
                this.$el.addEventListener("mouseover", this.overin, false);
                this.$el.addEventListener("mouseleave", this.leaveout, false);
            } else {
                this.trigger.map((data) => {
                    if(data === "click") {
                        this.$el.addEventListener("click", this.overin, false);
                    }
                })
            }
        },
        props: {
            trigger: {
                type: Array,
                default: []
            },
            overload: {
                type: String
            }
        }
    }
</script>
