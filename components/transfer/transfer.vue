<template>
    <div class="c-transfer">
        <div class="transfercont transfer-from">
            <div class="transfer-top">
                <checkbox :isnotall="sourceisnotall" :isselected="sourceisall" @change="sourceAllEvent">
                    {{ fromNum }} items
                </checkbox>
                <span class="from-title">
                    {{ title[0] }}
                </span>
            </div>
            <div class="transfer-content">
                <checkboxgroup :options="sourcedata" @change="sourceChangeEvent" :values="sourcevalue"></checkboxgroup>
            </div>
        </div>
        <div class="transfer-symbol">
            <c-button type="primary" icon="backward" size="small"></c-button>
            <c-button type="primary" icon="forward" size="small"></c-button>
        </div>
        <div class="transfercont transfer-to">
            <div class="transfer-top">

            </div>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .transfer-content {
        .j-checkboxgroup {
            .detail {
                .checkboxcont {
                    margin: 0;
                    box-sizing: border-box;
                    width: 100%;
                    padding: 10px;
                    transition: all .5s linear;
                    &:hover {
                        background: @transferblue;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
<style lang="less" scoped rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .c-transfer {
        display: flex;
        .transfercont {
            border: 1px solid @border;
            margin: 0 20px;
            box-sizing: border-box;
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
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
</style>
<script>
    import checkbox from '../checkbox/checkbox.vue'
    import checkboxgroup from '../checkbox/checkboxgroup.vue'
    import button from '../button/button.vue'
    export default({
        data() {
            return {
                fromSelected: [],
                toSelected: [],
                sourcevalue: []
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
                return this.sourcedata.length === this.sourcevalue.length
            },
            sourceisnotall() {
                return this.sourcevalue.length && this.sourcevalue.length !== this.sourcedata.length
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
            }
        }
    })
</script>