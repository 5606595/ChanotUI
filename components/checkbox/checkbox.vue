<template>
    <div class="checkboxcont" :class="{'checkboxcont-selected': isSelected, 'checkboxcont-selected-last': isSelectedLast}" @click="clickevent">
        <span class="j-checkbox">
            <input type="checkbox" />
        </span>
        <slot></slot>
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
        top: 0;
        left: 0;
        width: 12px;
        height: 12px;
        display: inline-block;
        border: 1px solid @border;
        border-radius: 3px;
        line-height: 12px;
        vertical-align: -3px;
        margin: 0 5px;
        z-index: 20;
        transition: all .2s linear;
        input {
            opacity: 0;
            position: absolute;
            left: 0;
            top: 0;
            visibility: hidden;
            /*display: none;*/
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
                border: 2px solid white;
                border-top: none;
                border-left: none;
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
                    state.dom.isSelectedLast = false;
                }
            }
        }
    })
    export default {
        data() {
            return {
                isSelected: false,
                isSelectedLast: false
            }
        },
        store,
        methods: {
            clickevent(event) {
                store.commit("clickDom");
                if(this.isSelected) {
                    this.isSelected = false;
                    this.isSelectedLast = true;
                    store.commit("addDom", this);
                } else {
                    this.isSelected = true;
                }
            }
        },
    }
</script>