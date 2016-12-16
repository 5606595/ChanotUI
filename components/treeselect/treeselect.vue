<template>
    <div class="c-treeselect" @click="clickEvent">
        <icon type="down"></icon>

    </div>
</template>
<style scoped lang="less" rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .c-treeselect {
        width: 300px;
        height: 25px;
        border: 1px solid @border;
        border-radius: 4px;
        transition: all .2s linear;
        position: relative;
        padding-right: 24px;
        box-sizing: border-box;
        &-clicked {
            border-color: @jbluelight;
            &:after {
                content: '';
                width: 300px;
                height: 25px;
                position: absolute;
                top: -3px;
                left: -3px;
                border: 2px solid @borderthin;
                border-radius: 6px;
            }
        }
        &:hover {
            border-color: @jbluelight;
            cursor: pointer;
        }
        .jicon-down {
            font-size: 12px;
            position: absolute;
            right: 6px;
            top: 6px;
            transition: all .2s linear;
            &-display {
                transform: rotate(180deg);
            }
        }
    }
</style>
<style lang="less" rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .c-treeselect-hide {
        position: absolute;
        border: 1px solid @border;
        border-radius: 4px;
        box-shadow: 0px 1px 6px @boxshadow, 0px 0px 6px @boxshadow;
        padding: 5px;
        box-sizing: border-box;
        animation: c-treeselect-hide-display .2s linear forwards;
        .c-treeselect-input {
            border: 1px solid @border;
            border-radius: 4px;
            width: 100%;
            height: 30px;
            padding: 0 5px;
            box-sizing: border-box;
            input {
                width: 100%;
                height: 26px;
                line-height: 26px;
                border: none;
                outline: none;
            }
        }
        .content {
            .jicon-right {
                transition: all .2s linear;
                &:hover {
                    cursor: pointer;
                }
            }
            .open {
                margin: 20px 0;
                color: @messagefontcolor;
                .jicon-right {
                    font-size: 12px;
                    margin: 0 5px;
                    transform: rotate(90deg);
                }
            }
            span {
                padding: 5px;
                border-radius: 2px;
                &:hover {
                    cursor: pointer;
                    background: @hoverpadding;
                }
            }
        }
        &-fade {
            animation: c-treeselect-hide-fadeout .1s linear;
        }
    }
    @keyframes c-treeselect-hide-display {
        0% {
            opacity: 0;
            transform: scaleY(0.6);
        }
        100% {
            opacity: 1;
            transform: scaleY(1);
        }
    }
    @keyframes c-treeselect-hide-fadeout {
        0% {
            opacity: 1;
            transform: scaleY(1);
        }
        100% {
            opacity: 0;
            transform: scaleY(0.6);
        }
    }
</style>
<script>
    import icon from '../icon'
    export default{
        data() {
            return {
                isDisplay: false,
                domCreated: false,
                treeDom: null
            }
        },
        components: {
            'icon': icon
        },
        methods: {
            clickEvent(event) {
                if(!this.isDisplay) {
                    this.display()
                } else {
                    this.hide();
                }
            },
            display() {
                let treeSelectDom = this.$el;
                let iconDown = treeSelectDom.querySelector(".jicon-down");
                treeSelectDom.classList.add('c-treeselect-clicked')
                iconDown.classList.add("jicon-down-display");
                this.isDisplay = true;
                if(this.domCreated) {

                } else {
                    let newDom = document.createElement("div");
                    newDom.classList.add('c-treeselect-hide')
                    newDom.innerHTML = ' <div class="c-treeselect-input">\
                            <input />\
                            </div>\
                            <div class="content">\
                            <div class="open">\
                                <i class="jicon jicon-right"></i>\
                                <span>parent 1</span>\
                            </div>\
                            </div>'
                    let rect = this.$el.getBoundingClientRect();
                    newDom.style.width = rect.width + 'px';
                    newDom.style.top = rect.top + document.body.scrollTop + rect.height + 3 + 'px';
                    newDom.style.left = rect.left + document.body.scrollLeft + 'px';
                    document.body.appendChild(newDom);
                    this.treeDom = newDom;
                }
            },
            hide() {
                let treeSelectDom = this.$el;
                let iconDown = treeSelectDom.querySelector(".jicon-down");
                treeSelectDom.classList.remove('c-treeselect-clicked')
                iconDown.classList.remove("jicon-down-display");
                this.isDisplay = false;
                let newDom = this.treeDom;
                newDom.classList.add('c-treeselect-hide-fade');
                newDom.addEventListener("animationend", this.fadeHandle, false);
            },
            fadeHandle() {
                let newDom = this.treeDom;
                newDom.style.display = "none";
                newDom.classList.remove("c-treeselect-hide-fade");
                newDom.removeEventListener("animationend", this.fadeHandle, false);
            }
        }
    }
</script>

