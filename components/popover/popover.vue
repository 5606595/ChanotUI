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
        transform: translate3d(-50%, -100% - 5px, 0);
        * {
            box-sizing: border-box;
        }
        .arrow {
            width: 0;
            height: 0;
            background: white;
            border-left: 3px solid transparent;
            border-right: 3px solid transparent;
            z-index: 20;
            border-top: 4px solid rgba(217, 217, 217, 1);
            border-bottom: none;
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translate3d(-50%, 0, 0);
            &:after {
                position: absolute;
                content: '';
                bottom: 2px;
                left: -3px;
                width: 0;
                height: 0;
                border-left: 3px solid transparent;
                border-right: 3px solid transparent;
                border-top: 3px solid white;
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
                    let timeEvent1;
                    let timeEvent2;
                    let animationHandle;
                    buttons[i].addEventListener('mouseover', () => {
                        if(document.body.querySelector('div[c-num="' + i + '"]')) {
                            window.clearTimeout(timeEvent2);
                            dom = document.querySelector('div[c-num="' + i + '"]')
                            dom.style.display = 'block';
                        } else {
                            dom = document.createElement("div");
                            dom.innerHTML = '<div class="arrow">\
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
                                window.clearTimeout(timeEvent1);
                                dom.style.display = "block"
                            }, false)
                            dom.addEventListener('mouseleave', () => {
                                timeEvent2 = window.setTimeout(() => {
                                    dom.classList.add('fadeout')
                                    dom.addEventListener('animationend', animationHandle, false);
                                }, 30)
                            }, false);
//                            dom.addEventListener("mouseenter")
//                            buttons[i].addEventListener('mouseleave', (event) => {
//                                console.log(event.target)
//                            })
                        }
                    }, false);
                    buttons[i].addEventListener('mouseleave', () => {
                        timeEvent1 = window.setTimeout(() => {
                            dom.classList.add('fadeout')
                            dom.addEventListener('animationend', animationHandle, false);
                        }, 30)
                    }, false);
                    animationHandle = function() {
                        dom.style.display = "none";
                        dom.classList.remove('fadeout');
                        dom.removeEventListener("animationend", animationHandle);
                    }
                }
            }
        },
        methods: {

        }
    }
</script>
