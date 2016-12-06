#spin组件,加载进度条
----------

####导入方法

    import { spin } from 'ChanotUI'

--------------

####使用方法

	Vue.component('c-spin', spin)

#####若用.vue文件则设置:

    {
        components: {
            'c-spin': spin
        }
    }

#####可设置提示语

	<c-spin tips="loading..."></spin>
