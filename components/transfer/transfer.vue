<template>
    <div class="c-transfer">
        <div class="transfer-from">
            <ul v-for="source in sourcedata">
                <li :title="source.title" :disabled="source.disabled">
                    {{ source.content }}
                </li>
            </ul>
        </div>
        <div class="transfer-symbol">

        </div>
        <div class="transfer-to">

        </div>
    </div>
</template>
<style lang="less" scoped>

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