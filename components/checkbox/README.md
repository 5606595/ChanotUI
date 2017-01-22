#checkbox,多选框

--------------

####导入方法

    import { checkbox } from 'ChanotUI'

--------------

####使用方法

    Vue.component('checkbox', checkbox)

#####若用.vue文件则设置:

    {
        components: {
            'checkbox': checkbox
        }
    }

#####使用方法

    <checkbox>Checkbox</checkbox>

####***API***

<table>
<tr>
	<td>参数</td>
	<td>使用说明</td>
	<td>类型</td>
	<td>默认值</td>
</tr>
<tr>
	<td>isselected</td>
	<td>设置该Checkbox选中状态</td>
	<td>Boolean</td>
	<td>false</td>
</tr>
<tr>
	<td>isnotall</td>
	<td>设置该Checkbox未全选状态</td>
	<td>Boolean</td>
	<td>false</td>
</tr>
</table>

###***该组件点击触发change事件，可监听***

#####设置全选框

    <template>
        <div style="margin: 20px 0; padding-bottom: 2px; border-bottom: 1px solid #DDD;">
            <checkbox @change="checkAllEvent" :isselected="checkall" :isnotall="notall">
	            Check All
	        </checkbox>
	    </div>
	    <checkboxgroup :options="checkAllList" :values="checkList"></checkboxgroup>
	</template>
	<script>
		import { checkbox, checkboxgroup } from 'ChanotUI'
		let allList = ["apple", "banana", "pear"];
		let initList = ["apple"];
		export default {
			components: {
				"checkbox": checkbox,
				"checkboxgroup": checkboxgroup
			},
			data: {
				return {
					checkAllList: allList,
					checkList: initList
				}
			},
			computed: {
				checkall() {
					return this.checkList.length === this.checkAllList.length
				},
				notall() {
					return this.checkList && this.checkList.length !== this.checkAllList.length
				}
			},
			methods: {
				checkAllEvent() {
					if(this.notall) {
						this.checkList = [];
						for(let i = 0; i < allList.length; i++) {
							this.checkList[i] = allList[i];
						}
					} else if(this.checkall) {
						this.checkList = [];
					} else {
						for(let i = 0; i < allList.length; i++) {
							this.checkList[i] = allList[i];
						}
					}
				}
			}
		}
	</script>


