#dropdown,下拉菜单

--------------

####导入方法

    import { dropdown } from 'ChanotUI'

--------------

####使用方法

    Vue.component('dropdown', dropdown)

#####若用.vue文件则设置:

    {
        components: {
            'dropdown': dropdown
        }
    }

#####使用方法

    <dropdown>
		<span slot="display">   //slot="display"设置要触发的元素
			Hover me <icon type="down"></icon>
		</span>
		<ul>                 //设置下拉菜单选项
          <li>
            <a href="">
              不敢回看
            </a>
          </li>
          <li>
            <a href="">
              左顾右盼不自然的暗自喜欢
            </a>
          </li>
          <li>
            <a href="">
              偷偷搭讪总没完地坐立难安
            </a>
          </li>
          <li>
            <a href="">
              试探说晚安 多空泛又心酸
            </a>
          </li>
        </ul>
    </dropdown>

