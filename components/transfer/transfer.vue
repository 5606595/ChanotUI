<template>
    <div class="c-transfer">
        <div class="transfercont transfer-from">
            <div class="transfer-top">
                <checkbox :isnotall="sourceisnotall" :isselected="sourceisall" @change="sourceAllEvent">
                    <span v-if="sourcevalue.length">{{ sourcevalue.length }}/</span>{{ fromNum }} items
                </checkbox>
                <span class="from-title">
                    {{ title[0] }}
                </span>
            </div>
            <div class="transfer-content">
                <checkboxgroup v-if="sourcedata.length" :options="sourcedata" @change="sourceChangeEvent" :values="sourcevalue"></checkboxgroup>
                <div class="notfound" v-if="!sourcedata.length">
                    <span>Not Found</span>
                </div>
            </div>
        </div>
        <div class="transfer-symbol">
            <c-button type="primary" icon="backward" size="small" :disabled="!targetvalue.length" @click="targetClickEvent"></c-button>
            <c-button type="primary" icon="forward" size="small" :disabled="!sourcevalue.length" @click="sourceClickEvent"></c-button>
        </div>
        <div class="transfercont transfer-to">
            <div class="transfer-top">
                <checkbox :isnotall="targetisnotall" :isselected="targetisall" @change="targetAllEvent">
                    <span v-if="targetvalue.length">{{ targetvalue.length }}/</span>{{ toNum }} items
                </checkbox>
                <span class="from-title">
                    {{ title[1] }}
                </span>
            </div>
            <div class="transfer-content">
                <checkboxgroup v-if="targetdata.length" :options="targetdata" @change="sourceChangeEvent" :values="targetvalue"></checkboxgroup>
                <div class="notfound" v-if="!targetdata.length">
                    <span>Not Found</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .transfer-content {
        height: 168px;
        .j-checkboxgroup {
            .detail {
                .checkboxcont {
                    margin: 0;
                    box-sizing: border-box;
                    width: 100%;
                    padding: 10px;
                    transition: all .5s linear;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    &:hover {
                        background: @transferblue;
                        cursor: pointer;
                    }
                }
            }
        }
        .notfound {
            display: flex;
            height: 100%;
            justify-content: center;
            align-items: center;
            color: @jdefault;
        }
    }
    .transfer-symbol {
        padding-top: 65px;
        .small {
            margin: 10px;
            padding: 2px 8px!important;
            border-radius: 0px;
            display: block;
        }
    }
</style>
<style lang="less" scoped rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .c-transfer {
        display: flex;
        padding: 0 20px;
        .transfercont {
            border: 1px solid @border;
            box-sizing: border-box;
            width: 200px;
            input {
                transition: all .2s linear;
                &:hover {
                    border-color: @jbluelight;
                    cursor: pointer;
                }
            }
            .transfer-top {
                padding: 10px;
                border-bottom: 1px solid @boxshadow;
            }
        }
    }
    .checkboxcont {
        width: 100px;
        margin-right: 20px;
        vertical-align: -3px;
    }
</style>
<script type="text/ecmascript-6">
    import checkbox from '../checkbox/checkbox.vue'
    import checkboxgroup from '../checkbox/checkboxgroup.vue'
    import button from '../button/button.vue'
    export default({
        data() {
            return {
                fromSelected: [],
                toSelected: [],
                sourcevalue: [],
                targetvalue: []
            }
        },
        computed: {
            fromNum() {
                return this.sourcedata.length
            },
            toNum() {
                return this.targetdata.length
            },
            sourceisall() {
                return this.sourcedata.length && this.sourcedata.length === this.sourcevalue.length
            },
            sourceisnotall() {
                return this.sourcevalue.length && this.sourcevalue.length !== this.sourcedata.length
            },
            targetisall() {
                return this.targetdata.length && this.targetdata.length === this.targetvalue.length
            },
            targetisnotall() {
                return this.targetvalue.length && this.targetvalue.length !== this.targetdata.length
            }
        },
        components: {
            'checkbox': checkbox,
            'checkboxgroup': checkboxgroup,
            'c-button': button
        },
        props: {
            sourcedata: {
                type: Array,
                default: [{
                    content: 'task1',
                    title: 'task1',
                    disabled: false
                }]
            },
            targetdata: {
                type: Array,
                default: []
            },
            title: {
                type: Array,
                default: ['Source', 'Target']
            }
        },
        methods: {
            sourceChangeEvent() {
            },
            sourceAllEvent() {
                if(this.sourceisnotall) {
                    this.sourcevalue = [];
                    for(let i = 0; i < this.sourcedata.length; i++) {
                        if(Object.prototype.toString.call(this.sourcedata[i]) === "[object Object]") {
                            this.sourcevalue[i] = this.sourcedata[i].content;
                        } else {
                            this.sourcevalue[i] = this.sourcedata[i];
                        }
                    }
                } else if(this.sourceisall) {
                    this.sourcevalue = [];
                } else {
                    this.sourcevalue = [];
                    for(let i = 0; i < this.sourcedata.length; i++) {
                        if(Object.prototype.toString.call(this.sourcedata[i]) === "[object Object]") {
                            this.sourcevalue[i] = this.sourcedata[i].content;
                        } else {
                            this.sourcevalue[i] = this.sourcedata[i];
                        }
                    }
                }
            },
            targetChangeEvent() {

            },
            targetAllEvent() {
                if(this.targetisnotall) {
                    this.targetvalue = [];
                    for(let i = 0; i < this.targetdata.length; i++) {
                        if(Object.prototype.toString.call(this.targetdata[i]) === "[object Object]") {
                            this.targetvalue[i] = this.targetdata[i].content;
                        } else {
                            this.targetvalue[i] = this.targetdata[i];
                        }
                    }
                } else if(this.targetisall) {
                    this.targetvalue = [];
                } else {
                    this.targetvalue = [];
                    for(let i = 0; i < this.targetdata.length; i++) {
                        if(Object.prototype.toString.call(this.targetdata[i]) === "[object Object]") {
                            this.targetvalue[i] = this.targetdata[i].content;
                        } else {
                            this.targetvalue[i] = this.targetdata[i];
                        }
                    }
                }
            },
            sourceClickEvent() {
                this.sourcevalue.map((data) => {
                    let index;
                    if(Object.prototype.toString.call(this.sourcedata[0]) === "[object Object]") {
                        this.sourcedata.map((data1, index1) => {
                            if(data1.content === data) {
                                index = index1;
                                return;
                            }
                        })
                    } else {
                        index = this.sourcedata.indexOf(data);
                    }
                    let element = this.sourcedata.splice(index, 1);
                    this.targetdata.unshift(element[0]);
                })
                this.sourcevalue = [];
            },
            targetClickEvent() {
                this.targetvalue.map((data) => {
                    let index;
                    if(Object.prototype.toString.call(this.targetdata[0]) === "[object Object]") {
                        this.targetdata.map((data1, index1) => {
                            if(data1.content === data) {
                                index = index1;
                                return;
                            }
                        })
                    } else {
                        index = this.targetdata.indexOf(data);
                    }
                    let element = this.targetdata.splice(index, 1);
                    this.sourcedata.unshift(element[0]);
                })
                this.targetvalue = [];
            }
        }
    })
</script>