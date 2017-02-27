<template>
    <div class="dropdown-content" @mouseover="overin" @mouseleave="leaveout">
        <div class="dropdown-display">
            <slot name="display"></slot>
        </div>
        <div class="dropdownlist" v-if="isAppear">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped rel="stylesheet/less" lang="less">
    @import '../../mixin/mixin.less';
    .dropdown-content {
        display: inline-block;
        position: relative;
        .dropdown-display {
            text-decoration: none;
            color: @jbluelight;
            &:hover {
                cursor: pointer;
            }
        }
        .dropdownlist {
            position: absolute;
            top: 100%;
        }
    }
</style>
<style lang="less" rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .dropdown-content {
        .dropdown-display {
            a {
                text-decoration: none;
                color: @jbluelight;
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                isAppear: false,
            }
        },
        components: {

        },
        computed: {

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
