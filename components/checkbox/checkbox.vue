<template>
    <div class="checkboxcont" :title="title" :class="{'checkboxcont-selected': isselected, 'checkboxcont-selected-last': isselectedLast, 'checkboxcont-notall': isnotall }" @click="clickevent">
        <span class="j-checkbox">
            <input type="checkbox" />
        </span>
        <span class="j-content">
            <slot></slot>
        </span>
    </div>
</template>
<style lang="less" scoped rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .checkboxcont {
        display: inline-block;
        &:hover {
            cursor: pointer;
            .j-checkbox {
                border-color: @jbluelight;
            }
        }
    }
    .j-checkbox {
        position: relative;
        top: 3px;
        left: 0;
        width: 12px;
        height: 12px;
        display: inline-block;
        border: 1px solid @border;
        border-radius: 3px;
        line-height: 12px;
        margin: 0 5px;
        z-index: 20;
        transition: all .2s linear;
        &:after {
            border-color: white;
            transition: all .2s linear;
        }
        input {
            opacity: 0;
            position: absolute;
            left: 0;
            top: 0;
            visibility: hidden;
        }
    }
    .checkboxcont-selected {
        .j-checkbox {
            background: @jbluelight;
            border-color: @jbluelight;
            &:after {
                content: '';
                width: 4px;
                height: 7px;
                border-right: 2px solid white;
                border-bottom: 2px solid white;
                position: absolute;
                left: 3px;
                top: 0;
                z-index: 30;
                transform: rotate(45deg) scale(1);
            }
        }
    }
    .checkboxcont-selected-last .j-checkbox {
        border-color: @jbluelight;
    }
    .checkboxcont-notall .j-checkbox {
        background: @jbluelight;
        border-color: @jbluelight;
        &:after {
            content: '';
            width: 6px;
            height: 7px;
            border-bottom: 2px solid white;
            position: absolute;
            left: 3px;
            top: -1px;
            z-index: 30;
        }
    }
</style>
<script>
    import Vuex from 'vuex';
    const store = new Vuex.Store({
        state: {
            dom: null
        },
        mutations: {
            addDom(state, payload) {
                state.dom = payload;
            },
            clickDom(state) {
                if(state.dom) {
                    state.dom.isselectedLast = false;
                }
            }
        }
    })
    export default {
        data() {
            return {
                isselectedLast: false,
            }
        },
        props: {
            isnotall: {
                type: Boolean,
                default: false
            },
            isselected: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: null
            }
        },
        store,
        methods: {
            clickevent(event) {
                store.commit("clickDom");
                if(this.isselected) {
                    this.isselected = false;
                    this.isselectedLast = true;
                    store.commit("addDom", this);
                } else {
                    if(this.isnotall) {
                        this.isnotall = false;
                    }
                    this.isselected = true;
                }
                this.$emit("change", this.$el.querySelector(".j-content").textContent.trim());
            }
        },
    }
</script>