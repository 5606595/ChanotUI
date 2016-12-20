#treeselect组件,树形选择器

--------------

####导入方法

    import { treeselect } from 'ChanotUI'

--------------

####使用方法

    Vue.component('treeselect', treeselect)

#####若用.vue文件则设置:

    {
        components: {
            'treeselect': treeselect
        }
    }

#####设置对象数组为可选择的项, 可设置内容, 标题

    <template>
        <treeselect v-bind:selectopt="opt"></treeselect>
    </template>

    export default({
        data() {
          return {
            opt: [{
                content: "parent",
                title: "这是parent",
                children: [{
                    content: "parent1",
                    title: "parent1",
                    children: [{
                        content: "child1",
                        title: "child1",
                        children: null
                    }]
                }, {
                    content: "child2",
                    title: "child2",
                    children: null

                }]
            }]
          }
        }
    })

#####***新增查找功能, 可在输入框内输入关键词对树进行搜索***