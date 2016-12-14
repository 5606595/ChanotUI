<template>
    <div class="c-popcontainer">
        <slot></slot>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .c-popcontainer {
        display: inline-block;
    }
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
        * {
            box-sizing: border-box
        }
        &-top, &-topLeft, &-topRight {
            transform: translate3d(-50%, ~"calc(-100% - 7px)", 0);
            .arrow {
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: 6px solid rgba(217, 217, 217, 1);
                border-bottom: none;
                bottom: -7px;
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
        &-top .arrow {
            left: 50%;
        }
        /*&-topLeft .arrow {*/
            /*left: 15%;*/
        /*}*/
        /*&-topRight .arrow {*/
            /*right: 15%;*/
        /*}*/
        &-right, &-rightTop, &-rightBottom {
            transform: translate3d(7px, ~"calc(-50% - 7px)", 0);
            .arrow {
                border-left: none;
                border-right: 6px solid rgba(217, 217, 217, 1);
                border-top: 5px solid transparent;
                border-bottom: 5px solid transparent;
                left: -7px;
                &:after {
                    border-top: 5px solid transparent;
                    border-bottom: 5px solid transparent;
                    border-right: 6px solid white;
                    top: -5px;
                    left: 2px;
                }
            }
        }
        &-right .arrow {
            top: 50%;
        }
        /*&-rightTop .arrow {*/
            /*top: 15%;*/
        /*}*/
        /*&-rightBottom .arrow {*/
            /*bottom: 15%;*/
        /*}*/
        &-bottom, &-bottomLeft, &-bottomRight {
            transform: translate3d(-50%, 7px, 0);
            .arrow {
                border-top: none;
                border-right: 5px solid transparent;
                border-left: 5px solid transparent;
                border-bottom: 6px solid rgba(217, 217, 217, 1);
                top: -7px;
                transform: translate3d(-50%, 0, 0);
                &:after {
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    border-bottom: 6px solid white;
                    left: -5px;
                    top: 2px;
                }
            }
        }
        &-bottom .arrow {
            left: 50%;
        }
        /*&-bottomLeft .arrow {*/
            /*left: 15%;*/
        /*}*/
        /*&-bottomRight .arrow {*/
            /*right: 15%;*/
        /*}*/
        &-left, &-leftTop, &leftBottom {
            transform: translate3d(~"calc(-100% - 7px)", -50%, 0);
            .arrow {
                border-right: none;
                border-left: 6px solid rgba(217, 217, 217, 1);
                border-top: 5px solid transparent;
                border-bottom: 5px solid transparent;
                right: -7px;
                transform: translate3d(0, -50%, 0);
                &:after {
                    border-top: 5px solid transparent;
                    border-bottom: 5px solid transparent;
                    border-left: 6px solid white;
                    top: -5px;
                    right: 2px;
                }
            }
        }
        &-left .arrow {
            top: 50%;
        }
        &-leftTop .arrow {
            top: 15%;
        }
        &-leftBottom .arrow {
            bottom: 15%;
        }
        .arrow {
            width: 0;
            height: 0;
            background: white;
            z-index: 20;
            position: absolute;
            &:after {
                position: absolute;
                content: '';
                width: 0;
                height: 0;
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
                    if(this.trigger === 'hover') {
                        let dom;
                        let timeEvent;
                        let animationHandle;
                        buttons[i].addEventListener('mouseover', () => {
                            if(dom) {
                                window.clearTimeout(timeEvent);
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
                                dom.classList.add('c-popover-' + this.placement);
                                dom.setAttribute('c-num', i);
                                if(this.placement === 'top') {
                                    dom.style.left = (buttons[i].offsetLeft + buttons[i].offsetWidth / 2) + 'px';
                                    dom.style.top = buttons[i].offsetTop + 'px';
                                } else if(this.placement === 'right') {
                                    dom.style.left = (buttons[i].offsetLeft + buttons[i].offsetWidth) + 'px';
                                    dom.style.top = (buttons[i].offsetTop + buttons[i].offsetHeight / 2) + 'px';
                                } else if(this.placement === 'bottom') {
                                    dom.style.left = (buttons[i].offsetLeft + buttons[i].offsetWidth / 2) + 'px';
                                    dom.style.top = (buttons[i].offsetTop + buttons[i].offsetHeight) + 'px';
                                } else {
                                    dom.style.left = (buttons[i].offsetLeft) + 'px';
                                    dom.style.top = (buttons[i].offsetTop + buttons[i].offsetHeight / 2) + 'px';
                                }
                                document.body.appendChild(dom)
                                dom.addEventListener('mouseover', (event) => {
                                    window.clearTimeout(timeEvent);
                                    dom.style.display = "block"
                                }, false)
                                dom.addEventListener('mouseleave', () => {
                                    timeEvent = window.setTimeout(() => {
                                        if(dom.style.display !== 'none') {
                                            dom.classList.add('fadeout')
                                            dom.addEventListener('animationend', animationHandle, false);
                                        }
                                    }, 30)
                                }, false);
                            }
                        }, false);
                        buttons[i].addEventListener('mouseleave', () => {
                            timeEvent = window.setTimeout(() => {
                                if(dom.style.display !== 'none') {
                                    dom.classList.add('fadeout')
                                    dom.addEventListener('animationend', animationHandle, false);
                                }
                            }, 30)
                        }, false);
                        animationHandle = function() {
                            dom.style.display = "none";
                            dom.classList.remove('fadeout');
                            dom.removeEventListener("animationend", animationHandle, false);
                        }
                    } else if(this.trigger === 'click') {
                        let dom;
                        let displayDom;
                        let animationHandle = function() {
                            dom.style.display = "none";
                            dom.classList.remove('fadeout');
                            dom.classList.remove('c-popover-display');
                            dom.removeEventListener("animationend", animationHandle, false);
                        }

                        let otherAnimationHandle = function() {
                            displayDom.style.display = "none";
                            displayDom.classList.remove('fadeout');
                            displayDom.classList.remove('c-popover-display')
                            displayDom.removeEventListener("animationend", otherAnimationHandle, false);
                            dom.classList.add('c-popover-display');
                        }
                        buttons[i].addEventListener('click', () => {
                            if(dom) {
                                dom.style.display = "block";
                            } else {
                                dom = document.createElement("div");
                                dom.innerHTML = '<div class="arrow">\
                                </div>\
                                <div class="inner">\
                                <div class="title">' +
                                this.title +
                                '</div>\
                                <div class="content">' +
                                this.content +
                                '</div>\
                                </div>';
                                dom.classList.add('c-popover');
                                dom.classList.add('c-popover-' + this.placement);
                                dom.setAttribute('c-num', i);
                                if(this.placement === 'top') {
                                    dom.style.left = (buttons[i].offsetLeft + buttons[i].offsetWidth / 2) + 'px';
                                    dom.style.top = buttons[i].offsetTop + 'px';
                                } else if(this.placement === 'right') {
                                    dom.style.left = (buttons[i].offsetLeft + buttons[i].offsetWidth) + 'px';
                                    dom.style.top = (buttons[i].offsetTop + buttons[i].offsetHeight / 2) + 'px';
                                } else if(this.placement === 'bottom') {
                                    dom.style.left = (buttons[i].offsetLeft + buttons[i].offsetWidth / 2) + 'px';
                                    dom.style.top = (buttons[i].offsetTop + buttons[i].offsetHeight) + 'px';
                                } else {
                                    dom.style.left = (buttons[i].offsetLeft) + 'px';
                                    dom.style.top = (buttons[i].offsetTop + buttons[i].offsetHeight / 2) + 'px';
                                }
                                document.body.appendChild(dom)
                            }
                            displayDom = document.querySelector(".c-popover-display");
                            if(displayDom) {
                                if(displayDom === dom) {
                                    dom.classList.add('fadeout');
                                    dom.addEventListener('animationend', animationHandle, false);
                                } else {
                                    displayDom.classList.add("fadeout");
                                    displayDom.addEventListener("animationend", otherAnimationHandle, false);
                                }
                            } else {
                                dom.classList.add('c-popover-display');
                            }
                        }, false);

                    }
                }
            }
            let displayDom;
            let animationHandle = function() {
                displayDom.style.display = "none";
                displayDom.classList.remove("fadeout");
                displayDom.classList.remove("c-popover-display");
                displayDom.removeEventListener("animationend", animationHandle, false);
            }
            document.body.addEventListener("click", (event) => {
                displayDom = document.querySelector(".c-popover-display");
                console.log()
                if(displayDom) {
                    let dom = event.target;
                    while(dom !== document.body) {
                        if(dom === displayDom || dom.className.indexOf("c-popcontainer") !== -1) {
                            return;
                        }
                        dom = dom.parentNode;
                    }
                    displayDom.classList.add("fadeout");
                    displayDom.addEventListener("animationend", animationHandle, false);
                }
            }, false);
        },
        methods: {

        },
        props: {
            placement: {
                type: String,
                default: 'top'
            },
            trigger: {
                type: String,
                default: 'hover'
            },
            title: {
                type: String,
                default: "This is title"
            },
            content: {
                type: String,
                default: "This is content"
            }
        }
    }
</script>
