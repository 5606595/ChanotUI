#transfer组件,穿梭框

--------------

####导入方法

    import { transfer } from 'ChanotUI'

--------------

####使用方法

    Vue.component('transfer', transfer)

#####若用.vue文件则设置:

    {
        components: {
            'transfer': transfer
        }
    }

#####设置穿梭框标题，类型为Array, 默认为[Source, Target]

	<transfer v-bind:title="title"></transfer>
	export default({
		data() {
			return {
				title: ["来源", "目标"]
			}
		}
	}


#####设置sourcedata, targetdata属性为穿梭框选项内容, 类型为Array

    <transfer :sourcedata="sourcedata"></transfer>
    export default({
	    data() {
		    return {
			    sourcedata: [{
				    content: "content1",
				    title: "title1"
				}, {
					content: "content2",
					title: "title2"
				}]
			}
		}
	})

#####如不设置title, 则title设为content

    <transfer :sourcedata="sourcedata"></transfer>
    export default({
	    data() {
		    return {
			    sourcedata: ["content1", "content2"]
			}
		}
	})

