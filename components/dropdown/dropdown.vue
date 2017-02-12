<template>
    <div class="dropdown-content">
        <slot></slot>
    </div>
</template>
<style scoped rel="stylesheet/less" lang="less">
    .dropdown-content {
        display: inline-block;
    }
    .overload {

    }
</style>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                isAppend: false,
                isAppear: false,
                overload: null
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
                if(this.isAppend) {
                    this.isAppear = true;
                } else {
                    this.isAppend = true;
                    let overloadDiv = document.createElement("div");
                    overloadDiv.innerHTML = this.overload;
                    overloadDiv.classList.add("overload");
                    this.overload = overloadDiv;
                    this.$el.appendChild(overloadDiv);
                }
            },
            leaveout() {

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
