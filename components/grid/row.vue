<template>
    <div class="c-row" :style="justifyContent">
        <slot></slot>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .c-row {
        display: flex;
    }
</style>
<script>
    export default {
        data() {
            return {

            }
        },
        props: {
            space: String
        },
        computed: {
            justifyContent() {
                switch (this.space) {
                    case 'start':
                        return {
                            justifyContent: 'flex-start'
                        }
                    case 'end':
                        return {
                            justifyContent: 'flex-end'
                        }
                    case 'center':
                        return {
                            justifyContent: 'center'
                        }
                    case 'between':
                        return {
                            justifyContent: 'space-between'
                        }
                    case 'around':
                        return {
                            justifyContent: 'space-around'
                        }
                }
                return null
            }
        }
    }
</script>
