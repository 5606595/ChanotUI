<template>
    <div class="c-transfer">
        <div class="transfercont transfer-from">
            <ul v-for="source in sourcedata">
                <li :title="source.title" :disabled="source.disabled">
                    <input type="checkbox">
                    {{ source.content }}
                </li>
            </ul>
        </div>
        <div class="transfercont transfer-symbol">

        </div>
        <div class="transfercont transfer-to">

        </div>
    </div>
</template>
<style lang="less" scoped rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .c-transfer {
        display: flex;
        .transfercont {
            border: 1px solid @border;
            margin: 0 20px;
            padding: 0 20px;
            box-sizing: border-box;
            input {
                transition: all .2s linear;
                &:hover {
                    border-color: @jbluelight;
                    cursor: pointer;
                }
            }
            ul {
                padding: 0;
                list-style: none;
            }
        }
    }
</style>
<script>
    export default({
        data() {
            return {

            }
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
                default: null
            },
            title: {
                type: Array,
                default: ['source', 'target']
            }
        },
    })
</script>