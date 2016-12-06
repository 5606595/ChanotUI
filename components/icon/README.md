#icon组件,图标库

--------------

####导入方法

    import { icon } from 'ChanotUI'

--------------

####使用方法

    Vue.component('c-icon', icon)

#####若用.vue文件则设置:

    {
        components: {
            'c-icon': icon
        }
    }

#####设置图标

    <c-icon type="success" />
    <c-icon type="fail" />
    <c-icon type="warning" />
    <c-icon type="loading" />
    <c-icon type="forward" />
    <c-icon type="backward" />
    <c-icon type="search" />

