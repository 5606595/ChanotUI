<template>
    <div>
        <slot></slot>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .c-popover {
        box-sizing: border-box;
        border-radius: 4px;
        display: inline-block;
        color: #666;
        position: absolute;
        z-index: 30;
        background: white;
        box-shadow: 2px 2px 2px @border, -1px -1px 2px @border;
        animation: fadein .2s forwards;
        transform: translate3d(-50%, -100% - 7px, 0);
        * {
            box-sizing: border-box
        }
        .arrow {
            width: 0;
            height: 0;
            background: white;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            z-index: 20;
            border-top: 6px solid rgba(217, 217, 217, 1);
            border-bottom: none;
            position: absolute;

            &:after {
                position: absolute;
                content: '';
                width: 0;
                height: 0;
            }
            &.top {
                bottom: -7px;
                left: 50%;
                transform: translate3d(-50%, 0, 0);
                &:after {
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    border-top: 6px solid white;
                    bottom: 2px;
                    left: -5px;
                }
            }
            &.topLeft {
                bottom: -7px;
                left: 30%;
                transform: translate3d(-50%, 0, 0);
                &:after {
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    border-top: 6px solid white;
                    bottom: 2px;
                    left: -5px;
                }
            }
            &.topRight {
                bottom: -7px;
                left: 70%;
                transform: translate3d(-50%, 0, 0);
                &:after {
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    border-top: 6px solid white;
                    bottom: 2px;
                    left: -5px;
                }
            }
        }
        .inner {
            .title {
                border-bottom: 1px solid @border;
                min-width: 177px;
                padding: 0 16px;
                height: 32px;
                line-height: 32px;
            }
            .content {
                padding: 8px 16px;
            }
        }
        &.fadeout {
            animation: fadeout .2s;
        }
    }
    @keyframes fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes fadeout {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
            }
        },
        mounted() {
            if(this.$el.querySelectorAll('button').length) {
                let buttons = this.$el.querySelectorAll("button");
                for(let i = 0; i < buttons.length; i++) {
                    let dom;
                    let timeEvent;
                    let animationHandle;
                    buttons[i].addEventListener('mouseover', () => {
                        if(dom) {
                            window.clearTimeout(timeEvent);
                            dom.style.display = 'block';
                        } else {
                            let arrowClass;
                            if(this.placement) {
                                arrowClass = this.placement;
                            } else {
                                arrowClass = 'top';
                            }
                            dom = document.createElement("div");
                            dom.innerHTML = '<div class="arrow ' + arrowClass + '">\
                                </div>\
                                <div class="inner">\
                                <div class="title">\
                                title\
                                </div>\
                                <div class="content">\
                                <p>\
                                content\
                                </p>\
                                <p>\
                                content\
                                </p>\
                                </div>\
                                </div>';
                            dom.classList.add('c-popover');
                            dom.setAttribute('c-num', i);
                            dom.style.left = (buttons[i].offsetLeft + buttons[i].offsetWidth / 2) + 'px';
                            dom.style.top = buttons[i].offsetTop + 'px';
                            document.body.appendChild(dom)
                            dom.addEventListener('mouseover', (event) => {
                                window.clearTimeout(timeEvent);
                                dom.style.display = "block"
                            }, false)
                            dom.addEventListener('mouseleave', () => {
                                timeEvent = window.setTimeout(() => {
                                    console.log('domleave')
                                    if(dom.style.display !== 'none') {
                                        dom.classList.add('fadeout')
                                        dom.addEventListener('animationend', animationHandle, false);
                                    }
                                }, 30)
                            }, false);
//                            dom.addEventListener("mouseenter")
//                            buttons[i].addEventListener('mouseleave', (event) => {
//                                console.log(event.target)
//                            })
                        }
                    }, false);
                    buttons[i].addEventListener('mouseleave', () => {
                        timeEvent = window.setTimeout(() => {
                            console.log('buttonleave')
                            if(dom.style.display !== 'none') {
                                dom.classList.add('fadeout')
                                dom.addEventListener('animationend', animationHandle, false);
                            }
                        }, 30)
                    }, false);
                    animationHandle = function() {
                        console.log('animation')
                        dom.style.display = "none";
                        dom.classList.remove('fadeout');
                        dom.removeEventListener("animationend", animationHandle, false);
                    }
                }
            }
        },
        methods: {

        },
        props: {
            placement: String
        }
    }
</script>
