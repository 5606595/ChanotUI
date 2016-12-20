<template>
    <div class="c-treeselect" @click="clickEvent">
        <icon type="down"></icon>
        <icon type="fail" jclass="clear"></icon>
        <div class="selectContent">
            Please a select
        </div>
    </div>
</template>
<style scoped lang="less" rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .c-treeselect {
        &.selected {
            .selectContent {
                color: black;
            }
            &:hover {
                .clear {
                    display: block;
                }
            }
        }
        width: 300px;
        height: 25px;
        border: 1px solid @border;
        border-radius: 4px;
        transition: all .2s linear;
        position: relative;
        padding-right: 24px;
        box-sizing: border-box;
        .selectContent {
            height: 25px;
            line-height: 25px;
            width: 100%;
            padding: 0 10px;
            color: @placeholder;
            box-sizing: border-box;
        }
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
        .clear {
            font-size: 12px;
            position: absolute;
            right: 6px;
            top: 6px;
            z-index: 30;
            background: white;
            color: grey;
            transition: all .2s linear;
            display: none;
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
        background: white;
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
            div {
                margin: 20px 0;
                color: @messagefontcolor;
                transition: all .2s ease-in;
                .jicon-right {
                    font-size: 12px;
                    margin: 0 5px;
                }
            }
            .jicon-right {
                transition: all .2s linear;
                &:hover {
                    cursor: pointer;
                }
            }
            .open {
                & > .jicon-right {
                    transform: rotate(90deg);
                }
            }
            .close {
                & > .jicon-right {
                    transform: rotate(0deg);
                }
            }
            .parent {
                .parent {
                    padding: 0 22px;
                }
                .children {
                    padding: 0 44px;
                }
            }
            .strong {
                & > span {
                    font-weight: 700;
                }
            }
            span {
                padding: 5px;
                border-radius: 2px;
                transition: font-weight .2s ease-in;
                &:hover {
                    cursor: pointer;
                    background: @hoverpadding;
                }
            }
            .notfound {
                padding: 0 5px;
                color: @placeholder;
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
<script type="text/ecmascript-6">
    import icon from '../icon'
    export default{
        data() {
            return {
                isDisplay: false,
                domCreated: false,
                treeDom: null,
                input: null,
                isMatched: false,
                notFound: null
            }
        },
        components: {
            'icon': icon
        },
        methods: {
            clickEvent(event) {
                if(event.target.className.indexOf("clear") !== -1) {
                    this.$el.querySelector(".selectContent").textContent = "";
                    this.$el.classList.remove("selected");
                    if(this.isDisplay) {
                        this.hide();
                    }
                    return;
                }
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
                    let newDom = this.treeDom;
                    let input = this.input;
                    newDom.style.display = "block";
                    input.focus();
                } else {
                    let newDom = document.createElement("div");
                    newDom.classList.add('c-treeselect-hide')
                    newDom.innerHTML = ' <div class="c-treeselect-input">\
                            <input />\
                            </div>\
                            </div>';
                    let content = document.createElement("div");
                    content.classList.add("content");
                    this.mapNode(content, this.selectopt);
                    newDom.appendChild(content);
                    let rect = this.$el.getBoundingClientRect();
                    newDom.style.width = rect.width + 'px';
                    newDom.style.top = rect.top + document.body.scrollTop + rect.height + 3 + 'px';
                    newDom.style.left = rect.left + document.body.scrollLeft + 'px';
                    document.body.appendChild(newDom);
                    let input = newDom.querySelector("input");
                    this.input = input;
                    input.focus();
                    this.treeDom = newDom;
                    this.domCreated = true;
                    newDom.addEventListener("click", (event) => {
                        if(event.target.nodeName.toLowerCase() === "span") {
                            this.$el.querySelector(".selectContent").textContent = event.target.textContent;
                            this.$el.classList.add("selected");
                            this.hide();
                        }
                        if(event.target.nodeName.toLowerCase() === "i") {
                            let parent = event.target.parentNode;
                            let children = parent.getElementsByTagName("div")[0];
                            if(parent.className.indexOf("open") !== -1) {
                                parent.classList.remove("open");
                                parent.classList.add("close");
                                children.style.display ="none";
                            } else {
                                parent.classList.remove("close")
                                parent.classList.add("open")
                                children.style.display = "block";
                            }
                        }
                    }, false);
                    input.addEventListener("keyup", this.nodeMatch, false)
                    document.body.addEventListener("click", (event) => {
                        let dom = event.target;
                        while(dom && dom !== document.body) {
                            if(dom === this.treeDom || dom === this.$el) {
                                return;
                            }
                            dom = dom.parentNode;
                        }
                        this.hide();
                    }, false);
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
            },
            mapNode(node, obj) {
                for(let i in obj) {
                    let child = document.createElement("div");
                    if(obj[i].children) {
                        child.innerHTML = "<i class='jicon jicon-right'></i><span title='" + obj[i].title + "'>" + obj[i].content + "</span><div class='innerContent'></div>";
                        child.classList.add("open");
                        child.classList.add("parent");
                        this.mapNode(child.getElementsByClassName("innerContent")[0], obj[i].children);
                    } else {
                        child.innerHTML = "<span title='" + obj[i].title + "'>" + obj[i].content + "</span>"
                        child.classList.add("children");
                    }
                    obj[i].dom = child;
                    obj[i].parent = node;
                    node.appendChild(child);
                }
            },
            nodeMatch() {
                this.isMatched = false;
                let option = this.selectopt;
                let input = this.input;
                let inputContent = input.value;
                let strongs = this.treeDom.querySelectorAll(".strong");
                for(let i = 0; i < strongs.length; i++) {
                    strongs[i].classList.remove("strong");
                }
                option.map((data) => {
                    this.matchMap(inputContent, data);
                    if(inputContent) {
                        this.strongMap(inputContent, data);
                    }
                })
                if(!this.isMatched) {
                    if(this.notFound) {
                        this.notFound.style.display = "block";
                    } else {
                        let notFound = document.createElement("div");
                        notFound.textContent = "Not Found";
                        notFound.classList.add("notfound");
                        this.notFound = notFound;
                        this.treeDom.querySelector(".content").appendChild(notFound);
                    }
                } else {
                    if(this.notFound) {
                       this.notFound.style.display = "none";
                    }
                }
            },
            matchMap(content, opt) {
                if(opt.content.indexOf(content) !== -1) {
                    this.isMatched = true;
                    this.displayAll(opt.dom);
                    return;
                } else {
                    opt.dom.style.display = "none";
                }
                if(opt.children) {
                    opt.children.map((data) => {
                        this.matchMap(content, data);
                    })
                }
            },
            displayAll(dom) {
                let temp = dom;
                while(temp.className.indexOf("content") == -1) {
                    temp.style.display = "block";
                    temp = temp.parentNode;
                }
                let divs = dom.getElementsByTagName("div");
                for(let i = 0; i < divs.length; i++) {
                    divs[i].style.display = "block";
                }
            },
            strongMap(content, opt) {
                if(opt.content.indexOf(content) !== -1) {
                    opt.dom.classList.add("strong");
                }
                if(opt.children) {
                    opt.children.map((data) => {
                        this.strongMap(content, data);
                    })
                }
            }
        },
        props: {
            selectopt: {
                type: Array,
                default: [{
                    content: 'parent',
                    title: 'this is a parent',
                    children: [{
                        content: 'child1',
                        title: 'haha',
                        children: null
                    }, {
                        content: 'child2',
                        title: 'hehe',
                        children: null
                    }]
                }]
            }
        }
    }
</script>

