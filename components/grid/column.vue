<template>
    <div class="c-col" :class="[cspan, cxs, csm, cmd, clg]">
        <slot></slot>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .c-col {
        .c-cols(@n, @i: @n) when (@i > 0) {
            &.c-col-@{i} {
                width: (@i * 100% / @n);
            };
            .c-cols(@n, (@i - 1));
        }
        .c-cols(12);
        display: flex;
        align-items: center;
        justify-content: center;
        word-break: break-all;
        overflow: hidden;
        @media(max-width: 767px) {
            .c-cols(@n, @i: @n) when (@i > 0) {
                &.c-xs-@{i} {
                    width: (@i * 100% / @n)
                }
                .c-cols(@n, (@i - 1));
            }
            .c-cols(12);
        }
        @media(min-width: 768px) and (max-width: 991px) {
            .c-cols(@n, @i: @n) when (@i > 0) {
                &.c-sm-@{i} {
                    width: (@i * 100% / @n)
                }
                .c-cols(@n, (@i - 1));
            }
            .c-cols(12);
        }
        @media(min-width: 992px) and (max-width: 1199px) {
            .c-cols(@n, @i: @n) when (@i > 0) {
                &.c-md-@{i} {
                    width: (@i * 100% / @n)
                }
                .c-cols(@n, (@i - 1));
            }
            .c-cols(12);
        }
        @media(min-width: 1200px) {
            .c-cols(@n, @i: @n) when (@i > 0) {
                &.c-lg-@{i} {
                    width: (@i * 100% / @n)
                }
                .c-cols(@n, (@i - 1));
            }
            .c-cols(12);
        }
    }
</style>
<script>
    export default {
        data() {
            return {
                cspan: this.span ? 'c-col-' + this.span : null,
                cxs: this.xs ? 'c-xs-' + this.xs : null,
                csm: this.sm ? 'c-sm-' + this.sm : null,
                cmd: this.md ? 'c-md-' + this.md : null,
                clg: this.lg ? 'c-lg-' + this.lg : null
            }
        },
        props: {
            span: Number,
            xs: Number,
            sm: Number,
            md: Number,
            lg: Number
        },

    }
</script>
